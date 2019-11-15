<template>
  <section class="page-content">
    <slideshow
      :isMobile="isMobile"
    />
    <cards
      :isMobile="isMobile"
    />
    <banners
      :isMobile="isMobile"
    />
    <infos
      :isMobile="isMobile"
    />
    <contacts
      :isMobile="isMobile"
    />
  </section>
</template>

<script>
import slideshow from './slideshow.vue';
import cards from './cards.vue';
import banners from './banners.vue';
import infos from './infos.vue';
import contacts from './contacts.vue';

export default {
  name: 'PageContent',
  components: {
    slideshow,
    cards,
    banners,
    infos,
    contacts,
  },
  props: {
    isMobile: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
