<template>
  <div class="homepageContent">
    <div class="homepageContent-Container">
      <div>
        <PizzaList></PizzaList>
        <div class="choose-pizza-title">Custom Pizza</div>
        <div class="custom-title">Size</div>
        <SizeList></SizeList>
        <div class="custom-title" style="margin-top: 20px;">Toppings</div>
        <ToppingsList></ToppingsList>
      </div>
      <div class="payment-part">
        <payment></payment>
      </div>
    </div>
  </div>
</template>

<script setup>
import PizzaList from '../food/PizzaList.vue';
import SizeList from '../food/SizeList.vue';
import ToppingsList from '../food/ToppingsList.vue';
import payment from '../food/payment.vue';
</script>
