import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
//import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.bundle';


import App from './App.vue'
import router from './router'
import axios from 'axios';

window.axios = axios;
window.axios.defaults.baseURL = 'http://127.0.0.1:8000';
window.axios.defaults.headers.common['Accept'] = 'application/json';
window.axios.defaults.headers.common['Content-Type'] = 'application/json';
window.axios.defaults.headers.common['X-Request-With'] = 'XMLHttpRequest';
window.axios.defaults.withCredentials = true;

const pinia = createPinia();
pinia.use(({store})=>{
    store.router = markRaw(router);
});
pinia.use(piniaPluginPersistedstate);

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
