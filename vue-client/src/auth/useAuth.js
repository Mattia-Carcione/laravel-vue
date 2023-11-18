import { reactive, computed } from 'vue';
import axios from 'axios';

const state = reactive({
    authenticated: false,
    user: {},
    errors: {},
});

function getToken() {
    return decodeURIComponent(document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*=\s*([^;]*).*$)|^.*$/, "$1"));
}

// login and authentication methods
export default function useAuth() {
    const getAuthenticated = computed(() => state.authenticated);
    const getUser = computed(() => state.user);
    const getErrors = computed(() => state.errors);

    const setAuthenticated = (authenticated) => {
        state.authenticated = authenticated;
    }
    const setUser = (user) => {
        state.user = user;
    }
    const setErrors = (errors) => {
        state.errors = errors
    }

    const attempt = async () => {
        try {
            const response = await axios.get('/api/user');
            setAuthenticated(true);
            setUser(response.data);
            setErrors({});
            return {
                response
            }
        } catch (e) {
            setAuthenticated(false);
            setUser({});
            console.log(e);
        }
    }

    const login = async (credentials) => {
        await axios.get('/sanctum/csrf-cookie')
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
            await axios.get("/sanctum/csrf-cookie");
            await axios.post("/register", credentials, {
                headers: {
                    "X-XSRF-TOKEN": getToken(),
                },
            });
            setAuthenticated(true);
            setUser(credentials);
        } catch (error) {
            if (error.response.status === 422) {
                console.log(error.response.data.errors);
                setErrors(error.response.data.errors);
            }
        }
    }

    return {
        login,
        logout,
        registerUser,
        attempt,
        getAuthenticated,
        getUser,
        getErrors,
    }
}
