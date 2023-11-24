import { reactive, computed } from 'vue';
import axios from 'axios';

const state = reactive({
    authenticated: false,
    user: {},
    message: {},
    errors: {},
});

function getToken() {
    return decodeURIComponent(document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*=\s*([^;]*).*$)|^.*$/, "$1"));
}

async function getCSRFToken() {
    return await axios.get('/sanctum/csrf-cookie');
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
            setErrors('');
            return {
                response
            }
        } catch (e) {
            setAuthenticated(false);
            setUser('');
            console.log(e);
        }
    }

    const login = async (credentials) => {
        await getCSRFToken();
        try {
            await axios.post('/login', credentials, {
                headers: {
                    'X-XSRF-TOKEN': getToken()
                }
            });
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
            await axios.post('/logout', {}, {
                headers: {
                    'X-XSRF-TOKEN': getToken()
                }
            });
            setAuthenticated(false);
            setUser({});
        } catch (e) {
            console.log(e);
        }
    }

    const registerUser = async (credentials) => {
        try {
            await getCSRFToken();
            await axios.post("/register", credentials, {
                headers: {
                    "X-XSRF-TOKEN": getToken(),
                },
            });
            await attempt();
        } catch (error) {
            if (error.response.status === 422) {
                console.log(error.response.data.errors);
                setErrors(error.response.data.errors);
            }
        }
    }

    const updateUser = async (credentials) => {
        const user = state.user.id;
        try {
            await getCSRFToken();
            const respone = await axios.put(`/api/user-update/${user}`, credentials, {
                headers: {
                    "X-XSRF-TOKEN": getToken(),
                },
            });
            await attempt();
            setMessage(respone.data.message);
        } catch (error) {
            if (error.response.status === 422) {
                setMessage('');
                setErrors(error.response.data.errors);
                console.log(error.response.data.errors);
            }
        }
    }

    const updateUserImage = async (credentials) => {
        console.log(credentials);
        const user = state.user.id;
        try {
            await getCSRFToken();
            const respone = await axios.post(`/api/user-update-image/${user}`, credentials, {
                headers: {
                    "X-XSRF-TOKEN": getToken(),
                    "Content-Type": "multipart/form-data",
                },
            });
            await attempt();
            setMessage(respone.data.message);
        } catch (error) {
            if (error.response.status === 422) {
                setMessage('');
                setErrors(error.response.data.errors);
                console.log(error.response.data.errors);
            }
        }
    }

    const deleteImage = async () => {
        const user = state.user.id;
        try {
            await getCSRFToken();
            const respone = await axios.delete(`/api/user-delete-image/${user}`, {
                headers: {
                    "X-XSRF-TOKEN": getToken(),
                },
            });
            await attempt();
            setMessage(respone.data.message);
        } catch (error) {
            if (error.response.status === 422) {
                setMessage('');
                setErrors(error.response.data.errors);
                console.log(error.response.data.errors);
            }
        }
    }

    const updatePassword = async (credentials) => {
        console.log(credentials);
        try {
            await getCSRFToken();
            const response = await axios.put("/user/password", credentials, {
                headers: {
                    "X-XSRF-TOKEN": getToken(),
                },
            });
            setAuthenticated(true);
            setMessage('Password updated successfully');
            setErrors('');
        } catch (error) {
            if (error.response.status === 422) {
                setMessage('');
                setErrors(error.response.data.errors);
                console.log(error.response.data.errors);
            }
        }
    }

    return {
        login,
        logout,
        registerUser,
        updatePassword,
        updateUser,
        updateUserImage,
        deleteImage,
        attempt,
        getAuthenticated,
        getUser,
        getMessage,
        getErrors,
    }
}
