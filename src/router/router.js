import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import SignupPage from "../views/SignupPage.vue";
import HomePage from "../views/HomePage.vue";
import AddPost from "../views/AddPost.vue";
import Post from "../views/Post.vue";
import ContactsPage from "@/views/ContactsPage.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: LoginPage },
  { path: "/signup", component: SignupPage },
  { path: "/home", component: HomePage, meta: { requiresAuth: true } },
  { path: "/add-post", component: AddPost, meta: { requiresAuth: true } },
  { path: "/posts/:id", component: Post, meta: { requiresAuth: true } },
  { path: "/contacts", name: "Contacts", component: ContactsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  if (to.meta.requiresAuth && !token) {
    next("/login");
  } else {
    next();
  }
});

export default router;
