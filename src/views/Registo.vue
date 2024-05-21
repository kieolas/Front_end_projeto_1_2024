<template>
    <div class="about">
        <h3 class="open-sans-titulo">Registo</h3>
        <form @submit.prevent="submit">
            <span class="open-sans-letra">email</span>
            <input class="open-sans-letra" type="email" v-model="email">
            <span class="open-sans-letra">senha</span>
            <input class="open-sans-letra" type="password" v-model="password">
            <button  type="submit" class="open-sans-letra">submeter</button>

        </form>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'; // Importing ref and onMounted from Vue
import firebase from 'firebase';
import { useRouter } from 'vue-router';
import axios from "axios";


import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
// Define a reactive variable to store the fetched data
const email = ref("");
const password = ref("");
//definir router importado
const router = useRouter();

const submit = () => {
    

    
    if (firebase.auth().currentUser !== null)
    {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            alert('success you signOut');
        }).catch((error) => {
            // An error happened.
        });
}
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            

            store.adicionarUser(user.value);
            alert('success user added');
            // You can do something after registration here
            
            firebase.auth().signInWithEmailAndPassword(email.value, password.value)
                .then(() => {
                    // Sign-in successful
                    alert('Success! You are signed in');
                    user.value = firebase.auth().currentUser;
                    store.adicionarUser(user.value);
                    // You can redirect the user or do something else after successful sign-in
                    router.push({ name: 'home' });
                })
                .catch((error) => {
                    // Handle sign-in errors
                    alert('Error! Unable to sign in: ' + error.message);
                });
        })
    
   
}


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
.open-sans-letra {
    font-family: "Open Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings:
        "wdth" 100;
}
input,
button {
    padding: 5px 15px;
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

span,
button {
    margin: 10px;
}

.about {
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 60px;
}

h3 {
    text-align: center;
    padding-bottom: 40px;
}
.app {
    margin-top: 4.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>
