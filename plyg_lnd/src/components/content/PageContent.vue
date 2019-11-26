<template>
  <section class="page-content">
    <slideshow
      :deviceType="deviceType"
    />
    <cards
      :deviceType="deviceType"
    />
    <banners
      :deviceType="deviceType"
    />
    <infos
      :deviceType="deviceType"
    />
    <contacts
      :deviceType="deviceType"
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
    deviceType: {
      type: String,
      required: true,
    },
  },
};
</script>
