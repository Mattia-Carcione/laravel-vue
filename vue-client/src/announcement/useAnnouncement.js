import { reactive, computed } from 'vue';
import axios from 'axios';

const response = reactive({
    data: [],
    error: null,
    success: null
})

function getToken() {
    return decodeURIComponent(document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*=\s*([^;]*).*$)|^.*$/, "$1"));
}

async function getCSRFToken() {
    return await axios.get('/sanctum/csrf-cookie');
}

export default function useAnnouncement() {
    const getData = computed(() => response.data);
    const getError = computed(() => response.error);
    const getSuccess = computed(() => response.success);

    const setData = (data) => {
        response.data = data;
    }

    const setError = (error) => {
        response.error = error;
    }

    const setSuccess = (success) => {
        response.success = success;
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
        getSuccess
    }
}