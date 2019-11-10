<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <MainLayout msg="TEst Landing in Vue.js App"/>
  </div>
</template>

<script>
import MainLayout from './components/MainLayout.vue';
import style from './scss/app.scss';

// use common global styles
export default {
  style,
  name: 'app',
  components: {
    MainLayout,
  },
};
</script>
