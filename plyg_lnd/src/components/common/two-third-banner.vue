<template>
  <div class="banner-wrapper grid-wrapper"
    :class="{
      '-weare': image === 'we are',
      '-wedo': image === 'we do',
      '-careers': image === 'careers',
    }"
  >
    <div class="grid-row" :class="{'-inverted': direction === 'ltr' && deviceType !== 'mobile'}">
      <div class="grid-column -sixty">
        <div class="banner-image">
        </div>
      </div>
      <div class="grid-column -fourty">
        <div class="banner-info">
          <h2 class="__title -ginormous">
            {{ title }}
          </h2>
          <h4 class="__subtitle">
            {{ subtitle }}
          </h4>
          <button class="__btn -cta -outline"
            :class="{
              '-inverted': direction === 'ltr' && deviceType === 'desktop',
              '-full': deviceType === 'mobile'
            }"
          >
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
    deviceType: {
      type: String,
      required: true,
    },
  },
};
</script>
