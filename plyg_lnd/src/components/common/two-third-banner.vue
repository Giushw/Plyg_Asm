<template>
  <div class="banner-wrapper grid-wrapper"
    :class="{
      '-weare': image === 'we are',
      '-wedo': image === 'we do',
      '-careers': image === 'careers',
    }"
  >
    <div class="grid-row" :class="{'-inverted': direction === 'ltr'}">
      <div class="grid-column -sixty">
        <div class="banner-image">
        </div>
      </div>
      <div class="grid-column -fourty">
        <div class="banner-info">
          <div class="__title -ginormous">
            {{ title }}
          </div>
          <div class="__subtitle">
            {{ subtitle }}
          </div>
          <button class="__btn -cta -outline" :class="{'-inverted': direction === 'ltr'}">
            {{ cta }}
            <font-awesome-icon :icon="['fas', 'angle-right']"></font-awesome-icon>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'two-third-banner',
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    cta: {
      type: String,
      defautl: 'Read More',
    },
    direction: {
      type: String,
      defautl: 'rtl',
    },
  },
};
</script>
