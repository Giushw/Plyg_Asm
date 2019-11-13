<template>
  <section class="page-content">
    <slideshow/>
    <cards/>
    <banners/>
  </section>
</template>

<script>
import slideshow from './slideshow.vue';
import cards from './cards.vue';
import banners from './banners.vue';

export default {
  name: 'PageContent',
  components: {
    slideshow,
    cards,
    banners,
  },
};
</script>
