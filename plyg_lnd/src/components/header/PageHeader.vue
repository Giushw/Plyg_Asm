<template>
  <header class="page-header">
    <picture class="header-logo">
      <img src="../../assets/images/logo-playground-white.png" alt="Playground Logo" class="__img">
    </picture>
    <nav class="header-nav">
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
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
  methods: {
    moveToWeAre() {
      // element.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    },
  },
};
</script>
