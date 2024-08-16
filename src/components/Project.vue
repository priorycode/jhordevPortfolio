<script setup>
import { defineProps } from "vue";
import { ChevronsRight, SquareArrowOutUpRight, Github } from "lucide-vue-next";
import ImageDashboardMoto from "@/assets/dashboard-motocuy.jpg";
import ImageLandingMoto from "@/assets/landing-motocuy.jpg";
import ImageLatanDigital from "@/assets/latamdigital.png";
import ImageLandingEducanet from "@/assets/educanetLanding.png";

const props = defineProps({
  showContainerAll: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <section class="container__proyectos">
    <h3 class="title__section">Proyectos</h3>
    <div class="proyectos">
      <div class="card__proyecto">
        <div class="proyecto__img">
          <div class="container__option">
            <!-- <a href="#"
                ><Github
                  class="size-[35px] cursor-pointer hover:stroke-color-green hover:scale-[1.3] transition-all duration-500 ease-in-out"
              /></a> -->
            <a href="https://chapatucuy.pe/" target="_blank">
              <SquareArrowOutUpRight
                class="size-[25px] md:size-[35px] cursor-pointer hover:stroke-color-green hover:scale-[1.3] transition-all duration-500 ease-in-out"
              />
            </a>
          </div>
          <img :src="ImageLandingMoto" alt="Imagen del proyecto" />
        </div>
        <div class="info__card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path
              d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"
            />
          </svg>
          <div class="info__title">
            <h3 class="text-left">Landing Page Moto Cuy</h3>
            <p class="text-left">
              Diseñé la landing en Figma para luego desarrollarla.<br />HTML -
              CSS - JS
            </p>
          </div>
        </div>
      </div>
      <!-- card -->
      <div class="card__proyecto">
        <div class="proyecto__img">
          <div class="container__option">
            <!-- <a href="#"
                ><Github
                  class="size-[35px] cursor-pointer hover:stroke-color-green hover:scale-[1.3] transition-all duration-500 ease-in-out"
              /></a> -->
            <a
              href="https://www.figma.com/proto/vuqSRQo3vM6Tz9YWQEjwY5/Motocuy?node-id=109-4159&starting-point-node-id=140%3A292"
              target="_blank"
            >
              <SquareArrowOutUpRight
                class="size-[25px] md:size-[35px] cursor-pointer hover:stroke-color-green hover:scale-[1.3] transition-all duration-500 ease-in-out"
              />
            </a>
          </div>
          <img :src="ImageDashboardMoto" alt="Imagen del proyecto" />
        </div>
        <div class="info__card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path
              d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"
            />
          </svg>
          <div class="info__title">
            <h3 class="text-left">Diseño Dashboar Moto Cuy</h3>
            <p class="text-left">
              Realicé el diseño en figma y desarrollé sobre una versión <br />
              que ya estaba creada.
            </p>
          </div>
        </div>
      </div>
      <!-- card -->
      <div class="card__proyecto">
        <div class="proyecto__img">
          <div class="container__option">
            <!-- <a href="#"
                ><Github
                  class="size-[35px] cursor-pointer hover:stroke-color-green hover:scale-[1.3] transition-all duration-500 ease-in-out"
              /></a> -->
            <a href="https://educanet-70549.web.app/about" target="_blank">
              <SquareArrowOutUpRight
                class="size-[25px] md:size-[35px] cursor-pointer hover:stroke-color-green hover:scale-[1.3] transition-all duration-500 ease-in-out"
              />
            </a>
          </div>
          <img :src="ImageLandingEducanet" alt="Imagen del proyecto" />
        </div>
        <div class="info__card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path
              d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"
            />
          </svg>
          <div class="info__title">
            <h3 class="text-left">Sistema de control Educanet</h3>
            <p class="text-left">
              Desarrollador FrontEnd, Diseñé la landing y el dashboard<br />
              VUE.JS - TAILWINDCSS - FIREBASE
            </p>
          </div>
        </div>
      </div>
      <!-- card -->
      <div class="card__proyecto">
        <div class="proyecto__img">
          <div class="container__option">
            <!-- <a href="#" target="_blank"
                ><Github
                  class="size-[35px] cursor-pointer hover:stroke-color-green hover:scale-[1.3] transition-all duration-500 ease-in-out"
              /></a> -->
            <a href="https://latamdigital.vercel.app/" target="_blank">
              <SquareArrowOutUpRight
                class="size-[25px] md:size-[35px] cursor-pointer hover:stroke-color-green hover:scale-[1.3] transition-all duration-500 ease-in-out"
              />
            </a>
          </div>
          <img :src="ImageLatanDigital" alt="Imagen del proyecto" />
        </div>
        <div class="info__card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path
              d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"
            />
          </svg>
          <div class="info__title">
            <h3 class="text-left">Sitio Web Latam Digital</h3>
            <p class="text-left">
              Desarrollé el sitio web para Latam Digital <br />
              HTML - BOOTSTRAP CSS - JS
            </p>
          </div>
        </div>
      </div>
      <!-- card -->
    </div>
    <div
      v-if="showContainerAll"
      class="container-all hover:scale-110 transition-transform duration-500 ease-in-out"
    >
      <router-link to="/project" class="all-project">
        Todos los Proyectos
        <ChevronsRight class="stroke-color-green" />
      </router-link>
    </div>
  </section>
  <!-- proyectos -->
</template>

<style scoped>
.container__proyectos {
  margin-top: 9rem;
  position: relative;
}
@media screen and (min-width: 450px) {
  .container__proyectos {
    margin-top: 6rem;
  }
}

.title__section {
  color: #ecf8ff;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
}

.proyectos {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2.1rem;
  margin-top: 1.8rem;
}

@media (min-width: 768px) {
  .proyectos {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 3.6rem;
  }

  .title__section {
    text-align: start;
  }
}

.card__proyecto {
  border-radius: 2rem;
  background: radial-gradient(
    100% 100% at 50% 0%,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.6),
    0px 3px 12px 0px rgba(0, 0, 0, 0.12), 0px 1px 2px 0px rgba(0, 0, 0, 0.04);
  backdrop-filter: blur(12px);
  padding: 0.5rem;
}

.card__proyecto img {
  border-radius: 1.5rem;
}

.card__proyecto .info__card {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-top: 1rem;
  margin-left: 1.6rem;
}

.card__proyecto .info__card svg {
  width: 4.5rem;
  height: 4.5rem;
  fill: #717689;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
}

.card__proyecto .info__card svg:hover {
  fill: #82f9a1;
  transform: scale(1.1);
}

.card__proyecto .info__card .info__title h3 {
  margin: 0;
  color: #fff;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.4rem; /* 160% */
}

.card__proyecto .info__card .info__title p {
  margin: 0;
  color: #717689;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem; /* 200% */
}

.proyecto__img {
  position: relative;
}

.proyecto__img .container__option {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  background: #111a20c2;
  padding: 1rem;
}

@media (min-width: 900px) {
  /* Suponiendo que "telefono" es para pantallas a partir de 768px */
  .proyecto__img .container__option {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111a20c2;
    border-radius: 1.5rem;
    transform: scale(0);
    transition: 0.5s all ease-in-out;
  }
  .proyecto__img:hover .container__option {
    transform: scale(1);
  }
}

.container-all {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}
.all-project {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.2rem;
}
@media screen and (min-width: 900px) {
  .container-all {
    margin-top: 0;
    position: absolute;
    top: 5px;
    right: 0;
  }
}
</style>
