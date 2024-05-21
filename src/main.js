import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCy3QHcRkYFYfIIIj_E32yunftovteg23s",
  authDomain: "front-end-70657.firebaseapp.com",
  databaseURL:
    "https://front-end-70657-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "front-end-70657",
  storageBucket: "front-end-70657.appspot.com",
  messagingSenderId: "864251832856",
  appId: "1:864251832856:web:dc5c4e3b723fba7ce8316d",
  measurementId: "G-FKVW78VSX8",
};
firebase.initializeApp(firebaseConfig);
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
