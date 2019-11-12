<template>
  <header class="page-header">
    <div class="header-wrapper grid-wrapper">
      <div class="grid-row -padded -gutted">
        <div class="grid-column">
          <picture class="header-logo">
            <img src="../../assets/images/logo-playground-white.png"
              alt="Playground Logo" class="__img">
          </picture>
        </div>
        <div class="grid-column">
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
        </div>
      </div>
    </div>
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
