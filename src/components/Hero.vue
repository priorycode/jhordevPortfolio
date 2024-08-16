<script setup>
import { Facebook, Github, Mail, Instagram } from "lucide-vue-next";
import Heroimg from "../assets/hero.png";
</script>
<template>
  <!-- <section class="hero">
    <div class="hero-info">
      <h1>Soy Jhordev, <span>Desarrollador</span> Frontend</h1>
      <p>
        ¡Bienvenido al mundo Jhordev! Aquí encontrarás mi galería de proyectos,
        artículos de programación y valiosos consejos para potenciar tus
        desarrollos.
      </p>
    </div>
    <div class="hero-avatar">
      <div class="avatar-container">
        <div class="cover"></div>
        <img :src="Heroimg" alt="Imagen avatar Jhordev" />
        <div class="nav-social">
          <a href="https://www.facebook.com/jhordymondra/" target="_blank"
            ><Facebook
              class="size-[30px] md:size-[18px] hover:scale-[1.25] transition-all duration-500 ease-in-out"
          /></a>
          <a href="https://www.instagram.com/jhordev.pe/" target="_blank"
            ><Instagram
              class="size-[30px] md:size-[18px] hover:scale-[1.25] transition-all duration-500 ease-in-out"
          /></a>
          <a href="https://github.com/priorycode" target="_blank"
            ><Github
              class="size-[30px] md:size-[18px] hover:scale-[1.25] transition-all duration-500 ease-in-out"
          /></a>
          <a
            href="mailto:jhordymondragon4@gmail.com?subject=Orden%20de%20Proyecto&body=Hola%20Jhordev,%20mi%20nombre%20es:%20[TU%20NOMBRE]%0AQuisiera%20trabajar%20en%20la%20siguiente%20idea:%20[DESCRIBE%20TU%20IDEA]"
            target="_blank"
            ><Mail
              class="size-[30px] md:size-[18px] hover:scale-[1.25] transition-all duration-500 ease-in-out"
          /></a>
        </div>
      </div>
    </div>
  </section> -->
  <section class="container__hero">
    <div class="hero__info">
      <h1>
        Soy Jhordev,<span> Diseñador</span> y
        <span> Desarrollador</span> Frontend
      </h1>
      <p>
        ¡Bienvenido al mundo Jhordev! Aquí encontrarás mi galería de proyectos,
        artículos de programación y valiosos consejos para potenciar tus
        desarrollos.
      </p>
    </div>
    <div class="round">
      <div class="hero__img">
        <div class="cover"></div>
        <img :src="Heroimg" alt="Imagen de Jhordev" />
        <div class="nav__social">
          <a href="https://www.facebook.com/jhordyMSaucedo" target="_blank">
            <Facebook
              class="size-[30px] md:size-[20px] hover:scale-[1.25] transition-all duration-500 ease-in-out hover:stroke-color-green"
            />
          </a>
          <a href="https://www.instagram.com/jhordev.pe/" target="_blank"
            ><Instagram
              class="size-[30px] md:size-[20px] hover:scale-[1.25] transition-all duration-500 ease-in-out hover:stroke-color-green"
          /></a>
          <a href="https://github.com/priorycode" target="_blank">
            <Github
              class="size-[30px] md:size-[20px] hover:scale-[1.25] transition-all duration-500 ease-in-out hover:stroke-color-green"
            />
          </a>
          <a
            href="mailto:jhordymondragon4@gmail.com?subject=Orden%20de%20Proyecto&body=Hola%20Jhordev,%20mi%20nombre%20es:%20[TU%20NOMBRE]%0AQuisiera%20trabajar%20en%20la%20siguiente%20idea:%20[DESCRIBE%20TU%20IDEA]"
            target="_blank"
            ><Mail
              class="size-[30px] md:size-[20px] hover:scale-[1.25] transition-all duration-500 ease-in-out hover:stroke-color-green"
          /></a>
        </div>
      </div>
    </div>
  </section>
  <!-- hero -->
</template>
<!-- <style scoped>
.hero {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  /* gap: 1.3rem; */
}
@media screen and (min-width: 450px) {
  .hero {
    grid-template-columns: 1fr 0.5fr;
    align-items: center;
    height: 47rem;
    margin-top: 6rem;
  }
}

.hero-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
}
.hero-info h1 {
  color: #fff;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
}
.hero-info h1 span {
  color: #82f9a1;
}

.hero-info p {
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

@media screen and (min-width: 450px) {
  .hero-info {
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 9px;
  }
  .hero-info h1 {
    font-size: 40px;
    text-align: left;
  }
  .hero-info h1 span {
    color: #82f9a1;
  }
  .hero-info p {
    color: #fff;
    text-align: left;
    font-size: 15px;
    max-width: 39.2rem;
  }
}

.hero-avatar {
  position: relative;
  height: 100%;
  z-index: 1;
}

.avatar-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cover {
  position: absolute;
  bottom: -0.2rem;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(17, 26, 32, 5%), rgba(17, 26, 32, 100%));
}

.avatar-container img {
  width: calc(100% - 0.8rem);
}

.nav-social {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-right: 1px solid #82f9a1;
  border-bottom: 1px solid #82f9a1;
  border-left: 1px solid #82f9a1;
  border-radius: 0.5rem;
  height: 4.9rem;
  width: 100%;
  position: absolute;
  bottom: -4rem;
}

@media screen and (min-width: 450px) {
  .avatar-container {
    position: absolute;
    top: 9rem;
    right: 8rem;
    transform: scale(1.8);
    /* transform: translate(0rem); */
  }
  .cover {
    bottom: -0.2rem;
  }

  .nav-social {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-right: 1px solid #82f9a1;
    border-bottom: 1px solid #82f9a1;
    border-left: 1px solid #82f9a1;
    border-radius: 0.5rem;
    height: 4rem;
    width: 100%;
    position: absolute;
    bottom: -2.5rem;
  }
}
</style> -->

<style scoped>
.container__hero {
  display: grid;
  gap: 1.3rem;
  grid-template-columns: repeat(1, 1fr);
  margin-top: 3rem;
}

@media (min-width: 450px) {
  .container__hero {
    align-items: center;
    grid-template-columns: 1fr 0.5fr;
    height: 47rem;
    margin-top: 8rem;
  }
}

.hero__info {
  z-index: 2;
}

.hero__info h1 {
  font-size: 3.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  text-align: center;
}

@media (min-width: 450px) {
  .hero__info h1 {
    font-size: 4rem;
    text-align: left;
  }
}

.hero__info h1 span {
  color: #82F9A1;
}

.hero__info p {
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
}

@media (min-width: 450px) {
  .hero__info p {
    font-size: 1.5rem;
    font-weight: 300;
    max-width: 39.2rem;
    text-align: left;
  }
}

.round {
  position: relative;
  z-index: 1;
}

.hero__img {
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
}

@media (min-width: 450px) {
  .hero__img {
    bottom: 4.5rem;
    right: 7rem;
    transform: scale(1.5);
  }
}

.hero__img .cover {
  background: linear-gradient(rgba(17, 26, 32, 0.05), #111a20);
  bottom: -0.2rem;
  height: 100%;
  position: absolute;
  width: 100%;
}

@media (min-width: 450px) {
  .hero__img .cover {
    bottom: -0.2rem;
  }
}

.hero__img img {
  width: calc(100% - 1rem);
}

.hero__img .nav__social {
  align-items: center;
  border-bottom: 1px solid #82f9a1;
  border-left: 1px solid #82f9a1;
  border-radius: 0.5rem;
  border-right: 1px solid #82f9a1;
  bottom: -3rem;
  display: flex;
  height: 4.9rem;
  justify-content: space-around;
  position: absolute;
  width: 100%;
}

.social__icon svg {
  cursor: pointer;
  height: 2.4rem;
  transition: fill 0.3s ease-in-out;
}

.social__icon svg:hover {
  fill: #fafe43;
}
</style>
