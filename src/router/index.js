// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Inicio from "../views/Inicio.vue";
import Project from "@/views/Project.vue";
import Contact from "@/views/Contact.vue";
import Articles from "@/views/Articles.vue";
import Resumen from "@/views/Resumen.vue";
import Projects_web from "../components/Projects/projects_web.vue";
import projects_all from "../components/Projects/projects_all.vue";
import projects_design from "../components/Projects/projects_design.vue";
import projects_landing from "../components/Projects/projects_landing.vue";
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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
