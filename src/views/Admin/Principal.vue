<script setup>
import { useRouter } from "vue-router";
import { auth } from "@/utils/firebaseConfig";
import { signOut } from "firebase/auth";
import SideBar from "@/components/Admin/SideBar.vue";

const router = useRouter();

const handleLogout = async () => {
  try {
    await signOut(auth);
    router.replace("/admin/login"); // Redirige a la página de inicio de sesión o la que prefieras
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
};
</script>

<template>
  <div class="h-screen grid grid-cols-10">
    <SideBar class="col-span-2" />
    <main class="col-span-8 p-20">
      <RouterView/>
    </main>
  </div>
</template>

<style scoped></style>
