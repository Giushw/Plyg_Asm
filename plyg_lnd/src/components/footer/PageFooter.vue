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
        <li class="__item __subtitle -light" @click="moveToWeAre">
          we are
        </li>
        <li class="__item __subtitle -light">
          we do
        </li>
        <li class="__item __subtitle -light">
          careers
        </li>
        <li class="__item __subtitle -light">
          contact us
        </li>
      </ul>
    </nav>
    <article class="footer-socials">
      <!-- <font-awesome-icon :icon="['fas', 'circle-notch']"></font-awesome-icon> -->
      <a href="https://www.facebook.com/playground.digital.agency" class="social-link">
        <font-awesome-icon class="__icon" :icon="['fab', 'facebook-square']" ></font-awesome-icon>
      </a>
      <a href="https://www.linkedin.com/company/playground-digital-agency" class="social-link">
        <font-awesome-icon class="__icon" :icon="['fab', 'linkedin-in']"></font-awesome-icon>
      </a>
      <a href="https://www.instagram.com/playground_agency/?hl=it" class="social-link">
        <font-awesome-icon class="__icon" :icon="['fab', 'instagram']"></font-awesome-icon>
      </a>
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
