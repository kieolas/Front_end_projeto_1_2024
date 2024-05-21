<template>
  <header style="width:100%">
    <nav>
      <img src="@\assets\logo-no-background.png" alt="imagem do logo">
      <div id="links"><button v-if="!!store.user" @click="showdiv=!showdiv">
          <div></div>
          <img src="@\assets\user.png" alt="imagem do utilizador">
        </button>

        <button id="textob" @click="signOut" v-if="!!store.user">Terminar a sessão</button>
        <router-link to="/registo" v-if="!!!store.user">Registo</router-link>
        <router-link to="/login" v-if="!!!store.user ">Login</router-link>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/searchview">Search</router-link>
        <router-link to="/checkout">Checkout</router-link>


      </div>

    </nav>
    <div id="card" v-if="showdiv">
      {{ store.user.email }}


    </div>
    <router-view />
  </header>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter';
import { ref } from 'vue'
import firebase from 'firebase'
import { RouterLink, RouterView } from 'vue-router';


const store = useCounterStore();
const showdiv = ref(false);


const signOut = () => {
if (firebase.auth().currentUser !== null) {
  firebase.auth().signOut().then(() => {
    console.log("teste");
    // Sign-out successful.
     store.adicionarUser(null);
    console.log("teste2");
    alert('success, you signOut');
  }).catch((error) => {
    console.log("error");
    // An error happened.
  });
  }

  // if (firebase.auth().currentUser !== null) {
  //   firebase.auth().signOut().then(() => {
  //     // Sign-out successful.
  //     store.adicionarUser(null);
  //   }).catch((error) => {
  //     // An error happened.
  //   });
  // }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');
button{background-color: transparent;
  color: white;
  border: none;
}

#card{
  position: relative;
  top: 40px;
  left: 40px;
  background-color: white;
    border-radius: 50px;
    width: 250px;
    text-align: center;
    align-self: center;
        top: 10px;
          left: 80%;
}
/* // <uniquifier>: Use a unique and descriptive class name
// <weight>: Use a value from 100 to 900 */
img{height: 85%;
width: auto;
    padding-left: 10px;
    border-radius: 0px;
align-self: center;}

#textob{font-family: "Roboto Condensed", sans-serif;
  font-optical-sizing: auto;
  font-weight: 550;
  font-style: normal;
color: #f6ce4e;
  align-self: center;
  background-color: transparent;
  font-size: 16px;
  
}
 a{
  font-family: "Roboto Condensed", sans-serif;
  font-optical-sizing: auto;
  font-weight: 550;
  font-style: normal;
}
#user{overflow: hidden;}
nav {
  display: flex;
  justify-content: space-between;
  
  background-color: #121212;
  gap: 10px;
  height: 7vh;
}

a {
  color: #f6ce4e;
  align-self: center;
  /* Changed from align-content to align-self */
  text-decoration: none;
  /* Added for better link styling */

}

/*  
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}*/
</style>
