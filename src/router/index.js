// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Inicio from "../views/Inicio.vue";
import Project from "@/views/Project.vue";
import Contact from "@/views/Contact.vue";
import Articles from "@/views/Articles.vue";
import Resumen from "@/views/Resumen.vue";
import Projects_web from "../components/Projects/projects_web.vue";
import projects_all from "../components/Projects/projects_all.vue";
import projects_design from "../components/Projects/projects_design.vue";
import projects_landing from "../components/Projects/projects_landing.vue";
import Login from "../views/Admin/Login.vue";
import Principal from "../views/Admin/Principal.vue";

const routes = [
  {
    path: "/",
    name: "inicio",
    component: Inicio,
  },
  {
    path: "/project",
    name: "project",
    component: Project,
    children: [
      {
        path: "",
        redirect: { name: "all" },
      },
      {
        name: "all",
        path: "/all",
        component: projects_all,
      },
      {
        name: "web",
        path: "/web",
        component: Projects_web,
      },
      {
        name: "design",
        path: "/design",
        component: projects_design,
      },
      {
        name: "landing",
        path: "/landing",
        component: projects_landing,
      },
    ],
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/articles",
    name: "articles",
    component: Articles,
  },
  {
    path: "/resumen",
    name: "resumen",
    component: Resumen,
  },
  {
    path: "/admin/login",
    name: "login",
    component: Login,
  },
  {
    path: "/admin/principal",
    name: "principal",
    component: Principal,
    meta: { requiresAuth: true },
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise(resolve => {
      resolve({ top: 0 });
    });
  }
});

let authInitialized = false;

const ensureAuthState = () => {
  return new Promise((resolve) => {
    const auth = getAuth();
    if (authInitialized) {
      resolve();
    } else {
      onAuthStateChanged(auth, (user) => {
        authInitialized = true;
        resolve(user);
      });
    }
  });
};

router.beforeEach(async (to, from, next) => {
  await ensureAuthState();
  const auth = getAuth();
  const isAuthenticated = !!auth.currentUser;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !isAuthenticated) {
    next("/admin/login"); // Redirige a login si no está autenticado
  } else if (!requiresAuth && isAuthenticated && to.path === "/admin/login") {
    next("/admin/principal"); // Redirige a principal si ya está autenticado y quiere ir a login
  } else {
    next(); // Permite el acceso
  }
});

export default router;
