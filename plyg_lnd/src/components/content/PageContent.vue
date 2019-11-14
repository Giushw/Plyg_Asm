<template>
  <section class="page-content">
    <slideshow/>
    <cards/>
    <banners/>
    <info />
  </section>
</template>

<script>
import slideshow from './slideshow.vue';
import cards from './cards.vue';
import banners from './banners.vue';
import info from './info.vue';

export default {
  name: 'PageContent',
  components: {
    slideshow,
    cards,
    banners,
    info,
  },
};
</script>
