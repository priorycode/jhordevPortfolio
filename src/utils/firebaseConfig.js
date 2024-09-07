import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpKuq3tGK-a4ZJzvNKEfnQBq46mnz7yAk",
  authDomain: "porfolio-jhordev.firebaseapp.com",
  projectId: "porfolio-jhordev",
  storageBucket: "porfolio-jhordev.appspot.com",
  messagingSenderId: "1086120648613",
  appId: "1:1086120648613:web:ff829266e4710163e2924c",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Configurar la persistencia de sesión
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Error al configurar la persistencia:", error);
});

export { db, auth };
