import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/views/MainPage.vue";
import SignupPage from "@/views/SignupPage.vue";

const routes = [
  { path: "/", component: MainPage },
  { path: "/signup", component: SignupPage },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
