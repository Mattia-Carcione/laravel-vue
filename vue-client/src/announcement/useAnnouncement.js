import { reactive, computed } from 'vue';
import axios from 'axios';

const announcements = reactive({
    data: {},
    error: null,
    success: null
})

const categories = reactive({
    data: {},
    error: null,
})

function getToken() {
    return decodeURIComponent(document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*=\s*([^;]*).*$)|^.*$/, "$1"));
}

async function getCSRFToken() {
    return await axios.get('/sanctum/csrf-cookie');
}

export default function useAnnouncement() {
    const getData = computed(() => announcements.data);
    const getError = computed(() => announcements.error);
    const getSuccess = computed(() => announcements.success);
    const getCategories = computed(() => categories.data);
    const getCategoryError = computed(() => categories.error);
    const setData = (data) => {
        announcements.data = data;
    }

    const setError = (error) => {
        announcements.error = error;
    }

    const setSuccess = (success) => {
        announcements.success = success;
    }

    const setCategories = async (response) => {
        categories.data = response;
    }

    const setCategoryError = (response) => {
        categories.error = response;
    }

    const fetchCategories = async () => {
        try {
            const response = await axios.get('/api/announcement-categories');
            setCategories(response.data.data);
            setCategoryError('');
        } catch (error) {
            setCategoryError(error.response.data);
            setCategories([]);
        }
    }

    const fetchAnnouncements = async () => {
        try {
            const response = await axios.get('/api/announcements');
            setData(response.data.data);
            setError('');
        } catch (error) {
            setError(error.response.data);
            setData([]);
        }
    }

    const fetchAnnouncementsByCategory = async (category) => {
        try {
            const response = await axios.get(`/api/announcements/${category}`);
            setData(response.data.data);
            setError('');
        } catch (error) {
            setError(error.response.data);
            setData([]);
        }
    }
    
    const store = async (data) => {
        try {
            await getCSRFToken();
            const response = await axios.post('/api/announcement-create', data, {
                headers: {
                    'X-XSRF-TOKEN': getToken()
                }
            });
            setData(response.data.data);
            setSuccess(response.data.message);
            setError('');
        } catch (error) {
            setError(error.response.data);
            setSuccess('');
        }
    }

    return {
        store,
        getData,
        getError,
        getSuccess,
        fetchAnnouncements,
        fetchAnnouncementsByCategory,
        fetchCategories,
        getCategories,
        getCategoryError,
    }
}