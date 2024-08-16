<script setup>
import { ArrowBigDownDash } from "lucide-vue-next";
import pdfUrl from "@/assets/CV - Jhordy Mondragon Saucedo.pdf";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="container">
    <iframe
      src="https://drive.google.com/file/d/1iK_eEgBEYtJ9acQBjfWSjwjADsRxZOzh/preview?usp=sharing"
      width="640"
      height="480"
      allow="autoplay"
      class="pdf-iframe"
    ></iframe>
    <a :href="pdfUrl" download class="floating-button">
      <ArrowBigDownDash />
    </a>
  </div>
  <Footer />
</template>

<style scoped>
.container {
  position: relative;
}

.pdf-iframe {
  width: 100%;
  height: 100vh;
  border: none;
  overflow: hidden;
}

.floating-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #007bff;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  z-index: 1000;
  cursor: pointer;
}

@media screen and (min-width: 1000px) {
  .floating-button {
    top: 100px;
    right: 20px;
  }
}

.floating-button:hover {
  background-color: #0056b3;
}

/* Oculta elementos específicos del iframe si es posible */
.pdf-iframe {
  /* Ejemplo de posible CSS, si se sabe el elemento exacto */
}
</style>
