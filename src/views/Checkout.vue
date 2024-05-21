<template>
    <div id="alerta" class="open-sans-letra" v-if="store.carrinho.length==0">
    Adicione na pesquisa!</div>
 
    <ul style="width: 110vh;overflow-y: scroll;">
            <li class="open-sans-letra" v-for="carrinho in store.carrinho" style="display: flex;align-items: center;justify-content: space-between;">
                <div id="left">
                    <div>
                {{
                carrinho.strMeal }}
                
                    </div>
                   <div class="poppins-light"> 
               {{ carrinho.preco }}€
               </div>
                </div>
                
                <!-- {{ carrinho.strCategoryDescription }} -->
                <img style="height: 100px;border-radius: 15%;" :src="carrinho.strMealThumb">
            </li>
        </ul>
    <button v-if="store.carrinho.length>0" id="adicionar"@click="compra(store.carrinho)">Comprar!</button>
    
    
</template>
<script setup>
import { ref } from 'vue';
import firebase from 'firebase';
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore()
const compra = (res) => {
    if (firebase.auth().currentUser !== null) {
        console.log(firebase.auth().currentUser);
        firebase.database().ref(`/carrinho/${store.user.uid}`).push().set(res)
            .then(() => {
                console.log("data sent!");
            })
    }else{alert("Erro, Faça login!")}
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:wght@300&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
 .poppins-light {
   font-family: "Poppins", sans-serif;
   font-weight: 300;
   font-style: normal;
 }
#alerta{    background-color: white;
    border-color: black;
    border-width: 2px;
    border-style: solid;
    /* text-align: center; */
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
margin-top: 17%;}
.open-sans-letra {
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings:
    "wdth" 100;
}
#adicionar{
padding: 15px;
margin-top: 20px;
margin-bottom : 10px;
margin-left: 40px;
margin-top: 150px;
}
ul{ display: flex; flex-wrap: wrap;justify-content: space-between;    height: 65vh;}
li{   padding-left: 7px; height: 110px; display: flex;   margin: 5px; flex-direction: row; background-color: white;border-radius: 15px; border-color: black ;border-width: 1px;border-style: solid ;width: 100%;}
img{width:25vh; height: auto;padding-right: 15px;}
#left{display: flex;
  flex-direction: column;justify-content: space-evenly;width: 200px;
  width: 70%}
  
</style>