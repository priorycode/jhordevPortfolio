<script setup>
import { ref } from "vue";
import { Facebook, Github, Mail, Instagram } from "lucide-vue-next";

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer
    class="mt-[60px] flex flex-col md:flex-row  gap-[10px] md:gap-0 justify-between items-center p-[20px] border-t border-[#f5f5f5]"
  >
    <p class="text-white text-[20px] font-semibold leading-[36px]">
      &copy;jhordev {{ currentYear }}
    </p>
    <nav class="flex gap-[20px] md:gap-[40px]">
      <a href="#"><Facebook /></a>
      <a href="#"><Instagram /></a>
      <a href="#"><Github /></a>
      <a href="#"><Mail /></a>
    </nav>
  </footer>
</template>
