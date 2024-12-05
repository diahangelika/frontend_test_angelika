<template>
  <div class="navbar" style="display: flex; justify-content: space-between; align-items: center; width: 1300px;">

    <div class="kiri">
      <router-link to="/" class="navbar">
         <img src="../../assets/img/logo.svg" alt="">
      </router-link> 
    </div>

    <div class="tengah" style="display: flex; justify-content: space-between; width: 500px">
      <div>Home</div>
      <div style="color: #E77E23;">Order</div>
      <div>About</div>
      <div>Blog</div>
      <div>Contact Us</div>
    </div>
      
    <div class="kanan" >
      <LoginMenu></LoginMenu>
      <SignupMenu></SignupMenu>
    </div>
  </div>
</template>

<script setup>
  import SignupMenu from './SignupMenu.vue';
  import LoginMenu from './LoginMenu.vue';
</script>

