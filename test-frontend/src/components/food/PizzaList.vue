<template>
  <div class="pizza-list">
    <div class="choose-pizza-container">
      <div class="choose-pizza-title">Choose your pizza</div>
      <div class="choose-pizza">

        <div @click="selectCard(pizza)" class="choose-pizza-card" :class="{ 'selected': selectedCard === pizza }" v-for="(pizza, index) in pizzaList" :key="pizza.id">
          <input type="radio" style="visibility: hidden;">

            <div v-if="pizza.discount.is_active === true" class="veggie">
              <div class="ribbon">
                OFFER
              </div> 
              <div class="actual-pizza">
                <div class="pizza-gambar">
                  <img :src="imgList[index]" alt="Pizza Image" />
                </div>
                <div class="pizza-detail">
                  <div class="pizza-name">{{ pizza.name }}</div>
                  <div><strike style="color: lightgray;">${{ pizza.price }}.00</strike> ${{ pizza.discount.final_price }}</div>
                </div>
              </div>
            </div>

            <div v-else class="actual-pizza">  
              <div class="pizza-gambar">
                <img :src="imgList[index]" alt="Pizza Image" />
              </div>
              <div class="pizza-detail">
                <div class="pizza-name">{{ pizza.name }}</div>
                <div>${{ pizza.discount.final_price }}.00</div>
              </div>
            </div>

          </input>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';

import imageCheese from "../../assets/img/pizza/Cheese Pizza.png";
import imageVeggie from "../../assets/img/pizza/Veggie Pizza.png";
import imageClassical from "../../assets/img/pizza/Classical Pizza.png";
const imgList = [imageCheese, imageVeggie, imageClassical];

const store = useStore();
const pizzaList = ref([]);
const selectedCard = ref(null);

onMounted(async () => {
  try {
    await store.dispatch("pizza/getPizzaData");
    pizzaList.value = store.state.pizza.pizzas;
  } catch (err) {
    console.error(err);
  }
});

const selectCard = (pizza) => {
  selectedCard.value = pizza;
  console.log("INI CEK SELECTED BOOOOO",pizza);
  store.dispatch("transaction/setSelectedPizza", pizza); 
};


</script>

<style scoped>
.choose-pizza-card.selected {
  background-color: #E77E23;
  color: white;
}
.actual-pizza{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}
.veggie{
  position: relative;
  overflow: hidden;
}
.ribbon{
  position: absolute;
  top: 20px;
  right: -40px;
  padding: 1px 50px;
  transform: rotate(45deg);
  z-index: 10;

  background-color: rgb(28, 28, 43);
  color: white;
  font-size: 13px;
}
</style>

<!-- BACKUP -->
<!-- // const selectCard = (pizza) => {
  //   selectedCard.value = pizza;
  // }; -->

<!-- // const addToCart = (pizza) => {
  //   // Add pizza to Vuex store
  //   store.dispatch('transaction/setPizza', pizza); 
  //   alert("Pizza added to cart!");
  // }; -->
<!-- const selectCard = (pizza) => {
  selectedCard.value = pizza;
  store.dispatch("pizza/setSelectedPizza", pizza);
}; -->

