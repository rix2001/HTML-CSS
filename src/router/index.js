import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/views/MainPage.vue';
import SignupPage from '@/views/SignupPage.vue';
import AddPost from '@/views/AddPost.vue';
import LoginPage from '@/views/LoginPage.vue';

const routes = [
  { path: '/', component: MainPage },
  { path: '/signup', component: SignupPage },
  { path: '/add-post', component: AddPost },
  { path: '/login', component: LoginPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
