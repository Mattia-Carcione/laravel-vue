import { reactive, computed } from 'vue';
import axios from 'axios';

const announcements = reactive({
    data: null,
    error: null,
    success: null
})

const categories = reactive({
    data: null,
    error: null,
})

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
            const response = await axios.get('/api/announcement/categories');
            setCategories(response.data.data);
            setCategoryError(null);
        } catch (error) {
            setCategoryError(error.response.data);
            setCategories(null);
        }
    }

    const fetchAnnouncements = async (page, userId = '') => {
        try {
            const response = await axios.get(`/api/announcements/${userId}?page=${page}`);
            setData(response.data.data);
            setError(null);
        } catch (error) {
            setError(error.response.data);
            setData(null);
        }
    }

    const fetchAnnouncementsByCategory = async (slug, page) => {
        try {
            const response = await axios.get(`/api/category/${slug}?page=${page}`);
            setData(response.data.data);
            setError(null);
        } catch (error) {
            setError(error.response.data);
            setData(null);
        }
    }

    const store = async (data) => {
        try {
            await getCSRFToken();
            const response = await axios.post('/api/announcement-create', data);
            setData(response.data.data);
            setSuccess(response.data.message);
            setError(null);
        } catch (error) {
            setError(error.response.data);
            setSuccess(null);
        }
    }

    const show = async (slug) => {
        try {
            const response = await axios.get(`/api/announcement/${slug}`);
            setData(response.data.data);
            setError(null);
        } catch (error) {
            setError(error.response.data);
            setData(null);
        }
    }

    const update = async (data) => {
        try {
            await getCSRFToken();
            const response = await axios.put(`/api/announcement-update/`, data);
            setData(response.data.data);
            setSuccess(response.data.message);
            setError(null);
        } catch (error) {
            setError(error.response.data);
            setSuccess(null);
        }
    }

    const destroy = async (data) => {
        try {
            await getCSRFToken();
            const response = await axios.delete(`/api/announcement-delete`, { data });
            setData(response.data.data);
            setSuccess(response.data.message);
            setError(null);
        } catch (error) {
            setError(error.response.data);
            setSuccess(null);
        }
    }

    return {
        store,
        update,
        destroy,
        show,
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