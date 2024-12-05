<template>
  <div class="size-container">
    <div class="sizes" v-for="size in sizeList" :key="size.id" > 

      <input type="radio" :id="size.id" :value="size" v-model="selectedSize"/>
      <label :for="size.id">
        {{ size.name }} 
        <span style="color: lightslategray;">(+{{ size.extra_price }})</span>
      </label>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const sizeList = ref([]);
const selectedSize = ref(null);

onMounted(async () => {
  try {
    await store.dispatch("size/getSizeData");
    sizeList.value = store.state.size.sizes;

   const defaultSize = sizeList.value.find(size => size.id === 1);
   selectedSize.value = defaultSize;
  } catch (err) {
    console.log(err);
  }
});

watch(selectedSize, (newSize) => {
  if (newSize) {
    store.dispatch('transaction/setSize', newSize);
  }
});
</script>

<!-- BACKUP -->
 <!-- :class="{ selected: selectedSize && size.name === selectedSize.name }"  -->
  <!--     // const defaultSize = sizeList.value.find(size => size.name === 'small');
    // if (defaultSize) {
    //   selectedSize.value = defaultSize;
    //   store.dispatch('transaction/setSize', defaultSize);
    // } -->
    <!-- // const defaultSize = ref(null); -->
