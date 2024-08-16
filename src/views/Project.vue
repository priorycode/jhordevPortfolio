<script setup>
import Footer from "../components/Footer.vue";
</script>

<template>
  <section class="mt-[30px] md:mt-[60px]">
    <h1 class="text-[#ecf8ff] text-center md:text-start text-[35px] md:text-[48px] font-semibold leading-normal">
      Proyectos Dev
    </h1>
    <p class="text-center md:text-start text-[#ecf8ff] text-[16px] md:text-[20px] font-normal leading-normal">
      Bienvenido a mi página de proyectos, donde podrás conocer una selección de trabajos que vengo realizado a lo largo de mi carrera profesional.
    </p>
  </section>

  <section class="mt-[5rem]">
    <div class="flex gap-[1rem] justify-center">
      <router-link
        to="/all"
        class="bg-color-black rounded-[1rem] py-[.5rem] cursor-pointer px-[1rem] text-size-16 text-white flex items-center"
      >
        Todos
      </router-link>
      <router-link
        to="/web"
        class="bg-color-black rounded-[1rem] py-[.5rem] cursor-pointer px-[1rem] text-size-16 text-white flex items-center"
      >
        Web
      </router-link>
      <router-link
        to="/design"
        class="bg-color-black rounded-[1rem] py-[.5rem] cursor-pointer px-[1rem] text-size-16 text-white flex items-center"
      >
        Diseños
      </router-link>
      <router-link
        to="/landing"
        class="bg-color-black rounded-[1rem] py-[.5rem] cursor-pointer px-[1rem] text-size-16 text-white flex items-center"
      >
        Landing
      </router-link>
    </div>
  </section>

  <router-view></router-view>
  <Footer />
</template>

<style scoped>
.router-link-active {
  background-color: #82F9A1; 
  color: #111A20;
  /* font-weight: 600; */
  box-shadow: 0px 0px 20.3px 0px rgba(130, 249, 161, 0.76);

}
</style>
