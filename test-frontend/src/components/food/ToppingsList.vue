<template>
  <div >
    <div class="topping-list-content" v-for="topping in toppingList" :key="topping.id">
      <input
        type="checkbox"
        :id="'cb-' + topping.id"
        class="topping-button hidden"
        @click="klikTopping(topping)"
        :disabled="!toppingAvailable(topping.id)">
      </input>
      <label :for="'cb-' + topping.id">{{ topping.name }}</label>
    </div>
  </div>
  
  </template>
  
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useStore } from 'vuex';
  import { computed } from 'vue';
  
  const store = useStore();
  const toppingList = ref([]);
  const selectedToppings = ref([]);
  const selectedPizza = computed(() => store.state.transaction.selectedPizza);
  
  const toppingAvailable = (id) => {
    return selectedPizza.value && selectedPizza.value.toppings.includes(id);
  }
  
  onMounted(async () => {
    try {
      await store.dispatch("toppings/getToppingData");
      toppingList.value = store.state.toppings.toppings;
    } catch (err) {
      console.error(err);
    }
  });
  
  const klikTopping = (topping) => {
    const index = selectedToppings.value.findIndex(t => t.id === topping.id);
    if (index === -1) {
      selectedToppings.value.push(topping);
    } else {
      selectedToppings.value.splice(index, 1);
    }

  };

  const filteredToppings = computed(() => {
    return selectedToppings.value.filter(topping =>
      selectedPizza.value.toppings.includes(topping.id)
    );
  });
    
  store.dispatch('transaction/setToppings', filteredToppings);
  
  </script>
  
  <style scoped>
  .no-pizza-selected, .no-toppings-available {
    text-align: center;
    color: gray;
    font-style: italic;
    margin: 20px 0;
  }
  
  .hidden {
    position: absolute;
    visibility: hidden;
    
  }
  
  input[type="checkbox"][disabled]+label {
    background-color: rgba(0, 0, 0, 0.30); 
    color: darkgray;
    border: 1px solid black;
    color: black;
    opacity: 0.5;
    cursor: not-allowed; 
  }
  
  input[type=checkbox]+label {
    color: var(--checkbox-default-color, black);
    margin: 10px;
    background-color: #F8F8F6;
    border: 1px solid rgb(146, 146, 146);
    padding: 10px 30px;
    border-radius: 300px;
    font-weight: bold;
    font-size: 14px;
    transition: color 0.3s, font-style 0.3s, border 0.3s;
  }
  
  input[type=checkbox]:checked+label {
    color: var(--checkbox-checked-color, #E77E23);
    border: 1px solid #E77E23;
    font-style: normal;
  }
  
  input[type=checkbox]+label:hover {
    color: var(--checkbox-hover-color, #E77E23);
    border: 1px solid #E77E23;
  }
  
  </style>
  
  
  <!-- BACKUP -->
  
  <!-- if (!selectedPizza.value || !selectedPizza.value.toppings) return [];
  
  
  <div class="topping-list-content" v-for="topping in availableToppings" :key="topping.id">
    <input
      type="checkbox"
      :id="'cb-' + topping.id"
      class="topping-button hidden"
      @click="toggleTopping(topping)"
    >
    </input>
    <label :for="'cb-' + topping.id">
      {{ topping.name }} (+${{ topping.price }})
    </label>
  </div> -->
  
  <!-- <template>
   <div v-if="!store.state.transaction.selectedPizza" class="no-pizza-selected">
    Please select a pizza to see available toppings.
  </div>
  
    <div class="toppingList">
      <div class="topping-list-content" v-for="topping in toppingList" :key="topping.id">
        
        <input
          type="checkbox"
          :id="'cb-' + topping.id"
          class="topping-button hidden"
          @click="toggleTopping(topping)"
        >
        </input>
        <label :for="'cb-' + topping.id">
          {{ topping.name }} (+${{ topping.price }})
        </label>
  
  
      </div>
    </div>
  
    <div v-else-if="availableToppings.length === 0" class="no-toppings-available">
    No toppings available for the selected pizza.
  </div>
  </template> -->
  
  <!-- <script setup>
  
  const availableToppings = computed(() => {
    const selectedPizza = store.state.transaction.selectedPizza; 
    if (!selectedPizza) return [];
    return toppingList.value.filter(topping =>
      selectedPizza.toppings.includes(topping.id) 
    );
  });
  import { ref, onMounted, watch } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const toppingList = ref([]);
  const selectedToppings = ref([]);
  
  onMounted(async () => {
    try {
      await store.dispatch("toppings/getToppingData");
      toppingList.value = store.state.toppings.toppings;
    } catch (err) {
      console.log(err);
    }
  });
  
  const toggleTopping = (topping) => {
    const index = selectedToppings.value.findIndex(t => t.id === topping.id);
    if (index === -1) {
      selectedToppings.value.push(topping);
    } else {
      selectedToppings.value.splice(index, 1);
    }
    store.dispatch('transaction/setToppings', selectedToppings.value);
  };
  
  </script> -->