<script setup>
import { Analytics } from '@vercel/analytics/vue';
import Hero from "@/components/Hero.vue";
import Project from "../components/Project.vue";
import Skill from "../components/Skill.vue";
import Footer from "../components/Footer.vue";
</script>
<template>
  <Analytics />
  <main>
    <Hero />
    <Project/>
    <Skill/>
  </main>
  <Footer/>
</template>
<style scoped></style>
