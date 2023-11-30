import { reactive, computed } from 'vue';
import axios from 'axios';

function getToken() {
    return decodeURIComponent(document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*=\s*([^;]*).*$)|^.*$/, "$1"));
}

async function getCSRFToken() {
    return await axios.get('/sanctum/csrf-cookie');
}

const announcements = reactive({
    data: {},
    error: null,
    message: null
})

export default function useRevisor() {
    const getAnnouncements = computed(() => announcements.data);
    const getError = computed(() => announcements.error);
    const getMessage = computed(() => announcements.message);

    const setAnnouncements = (data) => {
        announcements.data = data;
    }

    const setError = (error) => {
        announcements.error = error;
    }

    const setMessage = (message) => {
        announcements.message = message;
    }

    const fetchAnnouncements = async () => {
        try {
            const response = await axios.get('/api/announcements-to-be-revisioned');
            setAnnouncements(response.data.data);
            setError(null);
        } catch (error) {
            setAnnouncements({});
            setError(error.response.data);
        }
    }

    const acceptAnnouncement = async (id) => {
        try {
            await getCSRFToken();
            await axios.patch(`/api/announcement-accept/${id}`, {}, {
                headers: {
                    'X-XSRF-TOKEN': getToken()
                }
            });
            setMessage('Announcement accepted successfully');
        } catch (error) {
            setError(error.response.data);
            setMessage(null);
        }
    }

    const rejectAnnouncement = async (id) => {
        try {
            await getCSRFToken();
            await axios.patch(`/api/announcement-reject/${id}`, {}, {
                headers: {
                    'X-XSRF-TOKEN': getToken()
                }
            });
            setMessage('Announcement rejected successfully');
        } catch (error) {
            setError(error.response.data);
            setMessage(null);
        }
    }

    return {
        getAnnouncements,
        getError,
        getMessage,
        fetchAnnouncements,
        acceptAnnouncement,
        rejectAnnouncement
    }
}