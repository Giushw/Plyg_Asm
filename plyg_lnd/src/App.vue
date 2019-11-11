<template>
  <div id="app" class="page-container">
    <MainLayout/>
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
