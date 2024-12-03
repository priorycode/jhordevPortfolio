<script setup>
import { ref } from "vue";
import { Facebook, Github, Mail, Instagram, Linkedin  } from "lucide-vue-next";
import { useRouter } from 'vue-router';

const currentYear = new Date().getFullYear();
const router = useRouter();

const handleDoubleClick = () => {
  router.push("/admin/login");
};
</script>

<template>
  <footer
      class="mt-[60px] flex flex-col md:flex-row gap-[10px] md:gap-0 justify-between items-center p-[20px] border-t border-[#f5f5f5]"
  >
    <p
        class="text-white text-[20px] font-semibold leading-[36px]"
        @dblclick="handleDoubleClick"
    >
      <span class="cursor-default">&copy;jhordev {{ currentYear }}</span>
    </p>
    <nav class="flex gap-[20px] md:gap-[40px]">
      <a href="https://www.facebook.com/jhordymondra/" target="_blank"
      ><Facebook
      /></a>
      <a href="https://www.linkedin.com/in/jhordev/" target="_blank"><Linkedin /></a>
      <a href="https://www.instagram.com/jhordev.ing/" target="_blank"
      ><Instagram
      /></a>
      <a href="https://github.com/priorycode" target="_blank"><Github /></a>
      <a
          href="mailto:jhordymondragon4@gmail.com?subject=Orden%20de%20Proyecto&body=Hola%20Jhordev,%20mi%20nombre%20es:%20[TU%20NOMBRE]%0AQuisiera%20trabajar%20en%20la%20siguiente%20idea:%20[DESCRIBE%20TU%20IDEA]"
          target="_blank"
      ><Mail
      /></a>
    </nav>
  </footer>
</template>
