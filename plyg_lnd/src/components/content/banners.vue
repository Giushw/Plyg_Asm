<template>
  <div class="banners-wrapper">
    <TwoThirdBanner v-for="banner in infoBanners" :key="banner.id"
      :id="banner.ref"
      :image="banner.image"
      :title="banner.title"
      :subtitle="banner.subtitle"
      :cta="banner.cta"
      :direction="banner.direction"
      :isMobile="isMobile"
    />
  </div>
</template>

<script>
import TwoThirdBanner from '../common/two-third-banner.vue';

export default {
  name: 'banners',
  components: {
    TwoThirdBanner,
  },
  props: {
    isMobile: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      infoBanners: [
        {
          ref: 'weare',
          image: 'we are',
          title: 'we are.',
          subtitle: 'Consectetur adipiscing elit. Nulla condimentum tortor sem.',
          cta: 'The Players',
          direction: 'rtl',
        },
        {
          ref: 'wedo',
          image: 'we do',
          title: 'we do.',
          subtitle: 'Consectetur adipiscing elit. Nulla condimentum tortor sem.',
          cta: 'The Projects',
          direction: 'ltr',
        },
        {
          ref: 'careers',
          image: 'careers',
          title: 'careers.',
          subtitle: 'Consectetur adipiscing elit. Nulla condimentum tortor sem.',
          cta: 'The Position',
          direction: 'rtl',
        },
      ],
    };
  },
};
</script>
