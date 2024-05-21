<template>
  <div class="about">
    <!--<button @click="getCategorias" type="button">categorias</button>-->


    <ul>
      <li v-for="refeicao in refeicoes">

        <img :src="refeicao.strCategoryThumb">
        <div id="rigth">
          <div class="open-sans-letra">{{ refeicao.strCategory }}</div>
          <div class="poppins-light">2€</div>
        </div>
      </li>
    </ul>


  </div>
</template>
<script setup>
import { ref, onMounted} from 'vue'

const refeicoes = ref([])


const getCategorias = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(res => res.json())
    .then(dados => refeicoes.value = dados.categories)
}
const getpesquisa = (parametro_pesquisa) => {
  fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + parametro_pesquisa)
    .then(res => res.json())
    .then(dados => refeicoes.value = dados.meals)
}
onMounted(() => {
  
  getCategorias()
})
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:wght@300&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

/* <uniquifier>: Use a unique and descriptive class name
 <weight>: Use a value from 300 to 800 */

 .poppins-light {
   font-family: "Poppins", sans-serif;
   font-weight: 300;
   font-style: normal;
 }
.open-sans-letra {
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings:
    "wdth" 100;
}

ul{ display: flex; flex-wrap: wrap;justify-content: space-between;}
li{ display: flex; flex-direction: row; background-color: white;border-radius: 15px; border-color: black ;border-width: 1px;border-style: solid}
img{width:25vh; height: auto;padding-right: 15px;}
#rigth{display: flex;
  flex-direction: column;justify-content: space-evenly;width: 70px;}
  div{overflow-wrap: break-word;}
</style>
<!-- <style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style> -->
