<template>
  <div class="cookie-wrapper"
    ref="cookiePolicy"
    :class="{ 'is-hidden':cookieSet }"
  >
    <p class="cookie-disclaimer">
      Our website uses cookies to improve your experience.
      To find out more about the cookie we use please se our
      <a href="https://www.playground.it/%20/www.iubenda.com/privacy-policy/43977578/cookie-policy?an=no&s_ck=false"
        class="__link"
      >
        Cookie Policy
      </a>
      .
    </p>
    <button class="__btn -small"
      @click="acceptCookies"
    >
      Ok
    </button>
  </div>
</template>

<script>
import Cookies from 'js-cookie';

export default {
  name: 'cookie-policy',
  data() {
    return {
      cookieSet: false,
    };
  },
  created() {
    if (Cookies.get('CookieAccepted')) {
      this.cookieSet = true;
    }
  },
  methods: {
    acceptCookies() {
      this.cookieSet = true;
      const cookieValue = new Date().getTime();
      Cookies.set('CookieAccepted', cookieValue, { expires: 7 });
    },
  },
};
</script>
