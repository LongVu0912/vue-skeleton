import { createApp } from "vue";
import router from './router';
import App from "./App.vue";
import "./assets/css/style.css";
import "./assets/fontawesome-6.5.2/css/all.min.css"

const app = createApp(App);
app.use(router);
app.mount('#app');
