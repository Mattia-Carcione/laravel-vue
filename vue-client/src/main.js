import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000';

import '@fortawesome/fontawesome-free';

const app = createApp(App)

app.use(router, VueAxios, axios)

app.mount('#app')
