<script setup>
import { useRouter } from "vue-router";
import { auth } from "@/utils/firebaseConfig";
import { signOut } from "firebase/auth";

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
  <div class="h-[90vh] w-full flex flex-col items-center justify-center">
    <h1>Desde principal admin</h1>
    <button
      @click="handleLogout"
      class="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
    >
      Cerrar sesión
    </button>
  </div>
</template>

<style scoped></style>
