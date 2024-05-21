<template>
    <div class="about">
        <!-- {{ state.carrinho}} -->
        <div id="search">
            <input @click="displaySearchHistory" class="open-sans-letra" id="s" type="text" v-model="pesquisa"
                @keydown.enter="getpesquisa(pesquisa)">
            <button class="open-sans-letra" id="s" @click=" getpesquisa(pesquisa)" type="button">pesquisa</button>
        </div>
        <!-- <div v-for="linha in searchHistory.value">{{ linha }}</div> -->
        <!--<div style="display: absolute ; right: 10px;">{{ carrinho.}}</div>-->
        <!-- <ul style="width: 110vh;height: 47vh;overflow-y: scroll;">
            <li v-for="carrinho in store.carrinho"
                style="display: flex;align-items: center;justify-content: space-between;">
                {{
                carrinho.strMeal }}
                {{ carrinho.strCategoryDescription}}
                <img style="height: 100px;" :src="carrinho.strMealThumb">
            </li>
            {{ refeicoes }}
        </ul> -->

        <ul style="display: flex;align-items: flex-end;gap: 10px ;overflow-x: scroll;">
            <li v-for=" refeicao in refeicoes">
                <div class="open-sans-letra" id="texto">{{ refeicao.strMeal }}</div>
                <div id="texto2" class="poppins-light">{{ refeicao.preco }}€</div>

                <img style="height: 100px;" :src="refeicao.strMealThumb">
                <button class="open-sans-letra" id="adicionar" @click="store.adicionarCarrinho(refeicao)"
                    type="button">comprar</button>


            </li>
        </ul>


    </div>
</template>
<style local>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:wght@300&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

.poppins-light {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-style: normal;
}.open-sans-letra {
    font-family: "Open Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings:
        "wdth" 100;
}
#search{padding-top: 20px;padding-left: 20px; gap: 5px;display: flex;}
#s{padding: 5px 15px;
}
#texto{height: 100px; display:flex; text-align: center ;align-items: center;
    justify-content: center;}
li{display: flex;
    flex-direction: column;
    justify-content:space-between;}
#adicionar{padding: 6px;
margin-top: 10px;}   
ul{padding-top: 60px;}
#texto2{display: flex;
    text-align: center;
   
    height: 20px;
    align-items: center;
    justify-content: center;}
img{padding-top: 4px}
</style>
<script setup>
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'


const pesquisa = ref([]);
const refeicoes = ref([]);
const searchHistory = ref([]);
const store = useCounterStore()



const getpesquisa = (parametro_pesquisa) => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + parametro_pesquisa)
        .then(res => res.json())
        .then(dados => refeicoes.value = dados.meals)
        .then(() => {
            refeicoes.value.forEach(refeicao => refeicao.preco = Math.floor(Math.random() * 10) + 1.5)              
        })


        // Retrieve existing search history or initialize an empty array
        // let searchHistory = JSON.parse(localStorage.getItem('searchHistory'));
        // // Add the new query to the search history
        // searchHistory.push(parametro_pesquisa);
        // // Save the updated search history back to local storage
        // localStorage.setItem('searchHistory', JSON.stringify(searchHistory));

    }

const gerar_preco = (parametro_pesquisa) => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + parametro_pesquisa)
        .then(res => res.json())
        .then(dados => refeicoes.value = dados.meals)
}

// Function to save a search query to local storage
const displaySearchHistory = () => {
     searchHistory.value = JSON.parse(localStorage.getItem('searchHistory'));

}
</script>

<!-- <style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style> -->
