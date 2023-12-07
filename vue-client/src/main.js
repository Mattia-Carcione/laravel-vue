import './assets/main.css'
import './assets/input.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
axios.defaults.baseURL = 'http://localhost:8000';

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import useAuth from './auth/useAuth';

// setting attempt
const { attempt } = useAuth();

attempt()
    .then(() => {
        const app = createApp(App)

        app.use(router, VueAxios, axios)

        app.mount('#app')
    })


