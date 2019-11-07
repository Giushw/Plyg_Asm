<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import style from './scss/app.scss';

// use common global styles
export default {
  style,
  name: 'app',
  components: {
    HelloWorld,
  },
};
</script>
