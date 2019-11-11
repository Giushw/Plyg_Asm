<template>
  <footer class="page-footer">
    <picture class="footer-logo">
      <img src="../../assets/images/logo-playground-2-white.png"
        alt="Playground Logo"
        class="__img"
      >
    </picture>
    <nav class="footer-nav">
      <ul class="navigation-list">
        <li class="__item" @click="moveToWeAre">
          we are
        </li>
        <li class="__item">
          we do
        </li>
        <li class="__item">
          careers
        </li>
        <li class="__item">
          contact us
        </li>
      </ul>
    </nav>
    <article class="footer-socials">
      <!-- <font-awesome-icon :icon="['fas', 'circle-notch']"></font-awesome-icon> -->
      <font-awesome-icon class="__icon" :icon="['fab', 'facebook-square']">
      </font-awesome-icon>
      <font-awesome-icon class="__icon" :icon="['fab', 'linkedin-in']">
      </font-awesome-icon>
      <font-awesome-icon class="__icon" :icon="['fab', 'instagram']">
      </font-awesome-icon>
    </article>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter',
  methods: {
    moveToWeAre() {
      console.log('clicked');
    },
  },
};
</script>
