<template>
  <div class="about">
    <!--login-->
       <h3 class="open-sans-titulo">Login</h3>
        <form @submit.prevent="submit" >
            <span class="open-sans-letra">email</span>
            <input class="open-sans-letra" type="email" v-model="email">
            <span class="open-sans-letra">senha</span>
            <input class="open-sans-letra" type="password" v-model="password">
            <button class="open-sans-letra"type="submit">submeter</button>

            

        </form>
</div>
</template>
<script setup>
import { ref, onMounted } from 'vue'; // Importing ref and onMounted from Vue
import firebase from 'firebase'
import { useRouter } from 'vue-router';
import axios from "axios";
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore();

// Define a reactive variable to store the fetched data
const email = ref("");
const password = ref("");
const user = ref({});
//definir router importado
const router = useRouter();


// Fetch data from the API endpoint when the component is mounted
//https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCy3QHcRkYFYfIIIj_E32yunftovteg23s
const submit = () => {
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then(() => {
      alert('success');
      user.value = firebase.auth().currentUser;
      store.adicionarUser(user.value);
      router.push({ name: 'home' });
    })
    
  
}

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

 /* <uniquifier>: Use a unique and descriptive class name
 <weight>: Use a value from 300 to 800 */
input 
.open-sans-letra {
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings:
    "wdth" 100;
}

.open-sans-titulo {
  font-size: 40px;
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-variation-settings:
    "wdth" 100;
}
span, button{margin-left: 10px;margin-right: 10px;}
/*ultima modificação*/input,button{padding: 5px 15px; }
input,button{font-size: 15px;}
span{font-size: 20px;}
.about{align-items: center;display: flex;justify-content: center;flex-direction: column;padding-top: 60px;}
h3{text-align: center; padding-bottom: 40px;}

.app {
  margin-top: 4.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
