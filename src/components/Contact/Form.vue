<script setup>
import { ref } from "vue";
import { db } from "@/utils/firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";
import { Check } from "lucide-vue-next";

const newMessage = ref({
  name: "",
  email: "",
  message: "",
});

const isLoading = ref(false);
const isSent = ref(false);
const showAlert = ref(false);
const buttonText = ref("Enviar");

const isFormValid = () => {
  return (
    newMessage.value.name.trim() !== "" &&
    newMessage.value.email.trim() !== "" &&
    newMessage.value.message.trim() !== ""
  );
};

const submitMessage = async () => {
  if (!isFormValid()) {
    showAlert.value = true;
    buttonText.value = "Completa todos los campos";
    setTimeout(() => {
      showAlert.value = false;
      buttonText.value = "Enviar";
    }, 2000);
    return;
  }

  isLoading.value = true;
  buttonText.value = "Enviando...";
  try {
    await addDoc(collection(db, "messages"), newMessage.value);
    buttonText.value = "Enviado correctamente";
    isSent.value = true;
    newMessage.value = { name: "", email: "", message: "" };
  } catch (error) {
    buttonText.value = "Error al enviar";
  } finally {
    setTimeout(() => {
      isLoading.value = false;
      isSent.value = false;
      buttonText.value = "Enviar";
    }, 2000);
  }
};
</script>

<template>
  <div
    class="w-auto mx-auto md:w-[42.7rem] bg-gray-800 rounded-[2rem] px-[2rem] py-[2rem] shadow-md mt-[4rem]"
  >
    <form class="flex flex-col gap-[2.5rem]" @submit.prevent="submitMessage">
      <div>
        <label class="block text-white mb-[.8rem] text-size-16" for="name"
          >Tu nombre</label
        >
        <input
          v-model="newMessage.name"
          class="w-full px-[2rem] py-[1.6rem] text-size-16 bg-gray-700 text-white rounded-[.8rem] focus:outline-none focus:ring-2 focus:border-color-green focus:ring-color-green"
          type="text"
          id="name"
          placeholder="Nombre"
        />
      </div>
      <div>
        <label class="block text-white mb-[.8rem] text-size-16" for="email"
          >Tu E-mail</label
        >
        <input
          v-model="newMessage.email"
          class="w-full px-[2rem] py-[1.6rem] text-size-16 bg-gray-700 text-white rounded-[.8rem] focus:outline-none focus:ring-2 focus:border-color-green focus:ring-color-green"
          type="email"
          id="email"
          placeholder="Ejemplo@hotmail.com"
        />
      </div>
      <div>
        <label class="block text-white mb-[.8rem] text-size-16" for="message"
          >Tu mensaje</label
        >
        <textarea
          v-model="newMessage.message"
          class="w-full px-[2rem] py-[1.6rem] text-size-16 bg-gray-700 text-white rounded-[.8rem] focus:outline-none focus:ring-2 focus:border-color-green focus:ring-color-green"
          id="message"
          rows="4"
          placeholder="Hey..."
        ></textarea>
      </div>
      <div>
        <button
          :disabled="isLoading"
          :class="{
            'bg-blue-600 hover:bg-blue-700': !isSent && !showAlert,
            'bg-[#82F9A1]': isSent,
            'bg-orange-500 hover:bg-orange-500 ': showAlert,
          }"
          :style="{ color: isSent ? '#111A20' : '#FFFFFF' }"
          class="w-full flex items-center justify-center text-white py-[1.6rem] px-[.8rem] text-size-16 rounded-[.8rem] focus:outline-none focus:ring-2 transition-all duration-500 ease-in-out"
          type="submit"
        >
          <span v-if="isLoading && !isSent" class="spinner"></span>
          <span v-if="isSent" class="checkmark"> <Check /> </span>
          <span>{{ buttonText }}</span>
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.spinner {
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid #ffffff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  display: inline-block;
  margin-right: 10px;
}

.checkmark {
  display: inline-block;
  margin-right: 10px;
  font-size: 1.2rem;
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
