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

// login attempt methods
export default function useAuth() {
    // getting state
    const getAuthenticated = computed(() => state.authenticated);
    const getUser = computed(() => state.user);
    const getErrors = computed(() => state.errors);
    // setting state
    const setAuthenticated = (authenticated) => {
        state.authenticated = authenticated;
    }
    const setUser = (user) => {
        state.user = user;
    }
    const setErrors = (errors) => {
        state.errors = errors
    }
    // attempt
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
    // login
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
    // logout
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

    return {
        login,
        logout,
        attempt,
        getAuthenticated,
        getUser,
        getErrors,
    }
}
