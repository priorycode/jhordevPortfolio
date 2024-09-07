<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Eye, EyeOff, ChevronRight, Loader } from "lucide-vue-next";
import imgLogo from "@/assets/jd_sinfondo.svg";
import { auth } from "@/utils/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const router = useRouter();
const showPassword = ref(false);
const email = ref("");
const password = ref("");
const errorMessage = ref("");
const isSubmitting = ref(false);
const showFieldError = ref(false);
const showChevron = ref(true);

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!email.value || !password.value) {
    showFieldError.value = true;
    setTimeout(() => {
      showFieldError.value = false;
    }, 2000); // Muestra el mensaje durante 2 segundos
    return;
  }

  isSubmitting.value = true;
  errorMessage.value = "";
  showChevron.value = true;

  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    router.replace("/admin/principal");
  } catch (error) {
    if (error.code === "auth/wrong-password") {
      errorMessage.value = "Credenciales incorrectas";
    } else if (error.code === "auth/user-not-found") {
      errorMessage.value = "Cuenta no existente";
    } else {
      errorMessage.value = "Cuenta no existente";
    }
    showChevron.value = false; // Oculta el ChevronRight cuando hay un error
    setTimeout(() => {
      errorMessage.value = ""; // Limpia el mensaje después de 2 segundos
      showChevron.value = true; // Muestra el ChevronRight nuevamente
    }, 2000); // Muestra el mensaje durante 2 segundos
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div class="h-[90vh] w-full flex items-center justify-center">
    <div class="w-full max-w-[380px]">
      <div class="flex items-center">
        <img :src="imgLogo" alt="Logo de Jhordev" class="w-[40px] gap-[5px]" />
        <span class="text-size-32 font-bold">JhorDev</span>
      </div>
      <div class="mt-[40px] flex flex-col gap-[8px]">
        <span class="text-size-12 text-color-gray">WELCOME BACK 👋🏻</span>
        <h1 class="text-size-31 font-bold text-left">
          Continue to your Account.
        </h1>
      </div>
      <form @submit="handleSubmit" class="mt-[24px] flex flex-col gap-[17px]">
        <div
          class="flex flex-col gap-[2px] bg-color-gray-f5 py-[9px] px-[15px] rounded-[8px]"
        >
          <label for="user" class="text-color-gray-61 text-size-10 font-medium"
            >Email</label
          >
          <input
            v-model="email"
            type="email"
            class="text-color-black text-size-16 border-none bg-color-gray-f5 focus:outline-none focus:ring-0 p-0"
            placeholder="pedropicapiedra@gmail.com"
          />
        </div>
        <div
          class="relative flex flex-col gap-[2px] bg-color-gray-f5 py-[9px] px-[15px] rounded-[8px]"
        >
          <label
            for="password"
            class="text-color-gray-61 text-size-10 font-medium"
            >Password</label
          >
          <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            class="text-color-black text-size-16 border-none bg-color-gray-f5 focus:outline-none focus:ring-0 p-0"
            placeholder="♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦"
          />
          <button
            type="button"
            class="absolute right-[15px] top-[23px] text-color-gray-61"
            @click="showPassword = !showPassword"
          >
            <component
              :is="showPassword ? Eye : EyeOff"
              class="w-[16px] h-[16px]"
            />
          </button>
        </div>
        <button
          type="submit"
          :disabled="isSubmitting"
          :class="{
            'bg-color-green':
              !errorMessage.value ||
              errorMessage.value !== 'Cuenta no existente',
            'bg-red-500': errorMessage.value === 'Cuenta no existente',
          }"
          class="uppercase text-color-black font-bold rounded-[8px] hover:bg-color-green-os transition-colors duration-500 ease-in-out"
        >
          <span
            v-if="isSubmitting"
            class="flex items-center justify-center gap-[15.5px] py-[15.5px] rounded-[8px]"
          >
            <Loader class="animate-spin w-5 h-5 mr-2" />
            Autenticando...
          </span>
          <span v-else-if="showFieldError">
            <div
              class="bg-red-400 text-white flex items-center justify-center gap-[15.5px] py-[15.5px] rounded-[8px]"
            >
              Llena todos los campos
            </div>
          </span>
          <span
            v-else
            class="flex items-center justify-center gap-[15.5px] py-[15.5px]"
          >
            {{ errorMessage || "Continuar" }}
            <ChevronRight v-if="showChevron" />
          </span>
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Agrega cualquier estilo adicional aquí */
</style>
