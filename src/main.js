import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import './assets/styles/main.css'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

createApp(App).use(store).use(router).mount('#app')
app.component("Header", Header);
app.component("Footer", Footer);
