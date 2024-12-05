<template>
  <div class="payment-sidebar">
    <div style="color: #E77E23; font-size: 23px; font-weight: bold;">Payment Summary</div>
    
    <div v-if="selectedPizza" :key="selectedPizza.id" style="display: flex; align-items: center; justify-content: space-between;">
      <div style="color: gray;">{{ selectedPizza.name }}</div>
      <div>${{ selectedPizza.discount.final_price }}</div>
    </div>

    <div v-if="selectedSize" :key="selectedSize.id" style="display: flex; align-items: center; justify-content: space-between;">
      <div style="color: gray;">Size - {{ selectedSize.name }}</div>
      <div>${{ selectedSize.extra_price }}</div>
    </div>

    <div v-for="topping in selectedToppings" :key="topping.id" style="display: flex; align-items: center; justify-content: space-between;">
      <div style="color: gray;">{{ topping.name }} </div>
      <div>+${{ topping.price }}</div>
    </div>
      
    <hr>
    <div style="display: flex; align-items: center; justify-content: space-between;">
      <div class="total-price">Total Price</div>
      <div class="total-price" style="color: #E77E23;">${{ totalPrice }}</div>   
    </div>

    <div class="checkout-section">
      <button :disabled="!selectedPizza || !selectedSize" @click="checkout" style="color: white;" type="button" class="order-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Order Now
      </button>
    
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <i style="color: #E77E23; 
                        font-size: 100px; 
                        border:3px solid #E77E23; 
                        padding: 25px; 
                        border-radius: 60px;
                        background-color: rgba(231, 126, 35, 0.30);
                        margin-bottom: 10px;" class="fa-solid fa-receipt"></i>
              <div class="modal-order-succes">Order Success</div>
              <div>Thank you, we have received your order successfully.</div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary modal-button" data-bs-dismiss="modal" @click="close">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { watch } from 'vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const selectedPizza = computed(() => store.state.transaction.selectedPizza);
const selectedSize = computed(() => store.state.transaction.selectedSize);
const selectedToppings = computed(() => store.state.transaction.selectedToppings);
const totalPrice = computed(() => store.getters["transaction/checkoutTotal"]);

const checkout = () => {
  store.dispatch("transaction/clearCart");
};

const close = () => { 
  window.location.reload();
}
</script>

<style scoped>
.payment-sidebar{
  background-color: white;
}
.modal-body {
  text-align: center;
}
.modal-order-succes{
  font-size: 20px;
  font-weight: bold;
}
.modal-button {
  background-color: #E77E23;
  color: white;
  border: none;
}
button:disabled {
  opacity: 0.3;
  cursor: not-allowed; 
}
</style>

<!-- BACKUP -->
 <!-- const selectedPizza = computed(() => store.getters['transactions.selectedPizza']);
const selectedSize = computed(() => store.state.transaction.selectedSize);
const selectedToppings = computed(() => store.state.transaction.selectedToppings);
const totalPrice = computed(() => store.getters['transactions.checkoutTotal']); -->


<!-- // console.log("Selected Pizza:", selectedPizza.value);
// console.log("Selected Size:", selectedSize.value);
// console.log("Selected Toppings:", selectedToppings.value);
// console.log("Total Price:", totalPrice.value); -->

<!-- // watch(selectedPizza, () => {
//   const availableToppings = selectedToppings.value.filter(topping =>
//     selectedPizza.value.toppings.includes(topping.id)
//   );
//   store.commit("transaction/setSelectedToppings", availableToppings);
// }); -->

<!-- const filteredToppings = computed(() => {
  if (!selectedPizza.value || !selectedPizza.value.toppings) return [];
  return selectedToppings.value.filter(topping =>
    selectedPizza.value.toppings.includes(topping.id)
  );
}); -->