<template>
  <section class="page-content">
    <slideshow/>
    <cards/>
  </section>
</template>

<script>
import slideshow from './slideshow.vue';
import cards from './cards.vue';

export default {
  name: 'PageContent',
  components: {
    slideshow,
    cards,
  },
};
</script>
