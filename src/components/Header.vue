<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Menu, X } from "lucide-vue-next";

const isNavbarVisible = ref(false);

const toggleNavbar = () => {
  isNavbarVisible.value = !isNavbarVisible.value;
};

const closeNavbar = () => {
  isNavbarVisible.value = false;
};

const handleClickOutside = (event) => {
  const navbar = document.getElementById("navbar-default");
  const menuButton = event.target.closest("[data-collapse-toggle]");
  if (navbar && !navbar.contains(event.target) && !menuButton) {
    closeNavbar();
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

import pdfUrl from "@/assets/CV - Jhordy Mondragon Saucedo.pdf";
</script>

<template>
  <nav class="border-gray-200 dark:bg-gray-900 contenedor relative z-50">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-[1.5rem] md:py-[3rem]"
    >
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span
          class="logo self-center font-semibold whitespace-nowrap dark:text-white"
          >Jhordev</span
        >
      </a>
      <button
        @click="toggleNavbar"
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <Menu class="w-6 h-6 scale-150" />
      </button>
      <div
        :class="{
          'translate-x-0': isNavbarVisible,
          'translate-x-full': !isNavbarVisible,
        }"
        class="fixed top-0 right-0 w-3/4 max-w-sm h-full bg-[#111A20] text-white shadow-lg transform transition-transform duration-300 ease-in-out md:static md:transform-none md:w-auto md:bg-transparent md:shadow-none md:flex md:items-center md:justify-end"
        id="navbar-default"
      >
        <button
          @click="closeNavbar"
          type="button"
          class="absolute top-10 right-10 text-white md:hidden"
        >
          <X class="w-6 h-6 scale-150" />
        </button>
        <ul
          class="flex flex-col items-end md:flex-row gap-[2.5rem] md:gap-[3.2rem] pt-[65px] md:pt-0"
        >
          <li>
            <router-link @click="toggleNavbar" to="/" class="link"
              >Inicio</router-link
            >
          </li>
          <li>
            <router-link @click="toggleNavbar" to="/project" class="link"
              >Proyectos</router-link
            >
          </li>
          <li hidden>
            <router-link @click="toggleNavbar" to="/articles" class="link"
              >Artículos</router-link
            >
          </li>

          <li>
            <router-link @click="toggleNavbar" to="/contact" class="link"
              >Contacto</router-link
            >
          </li>
          <li>
            <a @click="toggleNavbar" :href="pdfUrl" download class="link"
              >Resumen</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.logo {
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.link {
  font-size: 18px;
  font-weight: 600;
  color: white;
  padding-right: 25px;
}
@media screen and (min-width: 450px) {
  .link {
    padding-right: 0;
  }
}
</style>
