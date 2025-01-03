<script setup>
import { useRouter } from "vue-router";
import { auth } from "@/utils/firebaseConfig";
import { signOut } from "firebase/auth";

const router = useRouter();
const handleLogout = async () => {
  try {
    await signOut(auth);
    router.replace("/login"); // Redirige a la página de inicio de sesión o la que prefieras
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
};
</script>

<template>
 <section class="border-r p-10">
   <nav class="flex flex-col">
     <RouterLink to="/admin" class="py-5 px-5 hover:bg-color-gray">Projectos</RouterLink>
     <RouterLink to="/admin/contactadmin" class="py-5 px-5 hover:bg-color-gray">Contacto</RouterLink>
     <button
         @click="handleLogout"
         class="py-5 px-5 hover:bg-red-700 text-left"
     >
       Cerrar sesión
     </button>
   </nav>
 </section>
</template>

<style scoped>

</style>