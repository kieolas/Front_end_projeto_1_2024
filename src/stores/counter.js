import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const carrinho = ref([]);
  const user = ref(null);
  const isAuthenticated = ref();

  const adicionarCarrinho = (item) => {
    carrinho.value.push(item);
  };
  const adicionarUser = (item) => {
    user.value = item;
  };
  return { adicionarCarrinho, carrinho, adicionarUser, user };
});


