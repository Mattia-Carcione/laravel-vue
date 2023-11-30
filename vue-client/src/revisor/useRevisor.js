import { reactive, computed } from 'vue';
import axios from 'axios';

const announcements = reactive({
    data: {},
    error: null,
})

export default function useRevisor() {
    const getAnnouncements = computed(() => announcements.data);
    const getError = computed(() => announcements.error);

    const setAnnouncements = (data) => {
        announcements.data = data;
    }

    const setError = (error) => {
        announcements.error = error;
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

    return {
        getAnnouncements,
        getError,
        fetchAnnouncements
    }
}