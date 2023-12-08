import { reactive, computed } from 'vue';
import axios from 'axios';

const state = reactive({
    authenticated: false,
    user: null,
    message: null,
    errors: null,
});

const getCSRFToken = async () => {
    await axios.get('/sanctum/csrf-cookie');
}

// login and authentication methods
export default function useAuth() {
    const getAuthenticated = computed(() => state.authenticated);
    const getUser = computed(() => state.user);
    const getMessage = computed(() => state.message);
    const getErrors = computed(() => state.errors);

    const setAuthenticated = (authenticated) => {
        state.authenticated = authenticated;
    }
    const setUser = (user) => {
        state.user = user;
    }
    const setMessage = (message) => {
        state.message = message;
    }
    const setErrors = (errors) => {
        state.errors = errors
    }

    const attempt = async () => {
        try {
            const response = await axios.get('/api/user');
            setAuthenticated(true);
            setUser(response.data);
            setErrors(null);
            return {
                response
            }
        } catch (e) {
            setAuthenticated(false);
            setUser(null);
            console.log(e);
        }
    }

    const login = async (credentials) => {
        try {
            await getCSRFToken();
            await axios.post('/login', credentials);
            await attempt();
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors);
            }
        }
    }

    const logout = async () => {
        try {
            await getCSRFToken();
            await axios.post('/logout', {});
            setAuthenticated(false);
            setUser(null);
        } catch (e) {
            console.log(e);
        }
    }

    const register = async (credentials) => {
        try {
            await getCSRFToken();
            await axios.post("/register", credentials);
            await attempt();
        } catch (error) {
            if (error.response.status === 422) {
                setErrors(error.response.data.errors);
            }
        }
    }

    const userId = () => {
        return state.user.id;
    }
    const updateUser = async (credentials) => {
        try {
            await getCSRFToken();
            const respone = await axios.put(`/api/user-update/${userId}`, credentials);
            await attempt();
            setMessage(respone.data.message);
            setErrors(null);
        } catch (error) {
            if (error.response.status === 422) {
                setMessage(null);
                setErrors(error.response.data.errors);
            }
        }
    }

    const updateUserImage = async (credentials) => {
        try {
            await getCSRFToken();
            const respone = await axios.post(`/api/user-update-image/${userId}`, credentials);
            await attempt();
            setMessage(respone.data.message);
            setErrors(null);
        } catch (error) {
            if (error.response.status === 422) {
                setMessage(null);
                setErrors(error.response.data.errors);
            }
        }
    }

    const deleteImage = async () => {
        try {
            await getCSRFToken();
            await axios.delete(`/api/user-delete-image/${userId}`);
            await attempt();
            setMessage(respone.data.message);
            setErrors(null);
        } catch (error) {
            if (error.response.status === 422) {
                setMessage(null);
                setErrors(error.response.data.errors);
            }
        }
    }

    const updatePassword = async (credentials) => {
        try {
            await getCSRFToken();
            await axios.put("/user/password", credentials)
                .then(() => {
                    setAuthenticated(true);
                    setMessage('Password updated successfully');
                    setErrors(null);
                })
        } catch (error) {
            if (error.response.status === 422) {
                setMessage(null);
                setErrors(error.response.data.errors);
            }
        }
    }

    const becomeRevisor = async (user) => {
        try {
            await getCSRFToken();
            await axios.get('/api/become-revisor/' + user)
                .then(response => {
                    setErrors(null);
                    setMessage(response.data.message);
                    return {
                        response
                    }
                })

        } catch (e) {
            setErrors(e.response.data.message);
        }
    }

    return {
        attempt,
        login,
        logout,
        register,
        updateUser,
        updatePassword,
        updateUserImage,
        deleteImage,
        becomeRevisor,
        getAuthenticated,
        getUser,
        getMessage,
        getErrors,
    }
}
