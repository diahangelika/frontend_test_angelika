<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
</script> -->

<template>
  <div>
    <WebHeader></WebHeader>
    <HomePage></HomePage>
    <WebFooter></WebFooter>
  </div>
  <!-- <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
</template>

<script setup>
import WebHeader from './components/header/WebHeader.vue';
import WebFooter from './components/footer/WebFooter.vue';
import HomePage from './components/pages/HomePage.vue';
</script>

<!-- <style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->
