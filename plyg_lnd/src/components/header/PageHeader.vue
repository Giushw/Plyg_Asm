<template>
  <header class="page-header"
    :class="{
      'is-carousel-visible': scrollPosition < slideshowHeight,
      'is-carousel-covered': scrollPosition > slideshowHeight
    }"
  >
    <div class="header-wrapper grid-wrapper">
      <div class="grid-row -padded" :class="{'-gutted': deviceType === 'desktop'}">
        <div class="grid-column" :class="{
          '-center': deviceType !== 'desktop',
          '-thirty': deviceType === 'tablet'
          }"
        >
          <picture class="header-logo">
            <img src="../../assets/images/logo-playground-white.png"
              alt="Playground Logo" class="__img">
          </picture>
        </div>
        <div class="grid-column" v-if="deviceType !== 'mobile'"
          :class="{'-seventy': deviceType === 'tablet'}"
        >
          <nav class="header-nav">
            <ul class="navigation-list">
              <li class="__item" @click="callToWeAre">
                we are
              </li>
              <li class="__item" @click="callToWeDo">
                we do
              </li>
              <li class="__item" @click="callToCareers">
                careers
              </li>
              <li class="__item" @click="callToContacts">
                contact us
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
  data() {
    return {
      scrollPosition: null,
      slideshowHeight: (this.deviceType === 'mobile') ? 62 : 798,
    };
  },
  props: {
    deviceType: {
      type: String,
      required: true,
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    callToWeAre() {
      this.$emit('anchorWeAre');
    },
    callToWeDo() {
      this.$emit('anchorWeDo');
    },
    callToCareers() {
      this.$emit('anchorCareers');
    },
    callToContacts() {
      this.$emit('anchorContacts');
    },
  },
};
</script>
