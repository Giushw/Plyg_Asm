<template>
  <svg
    :width="size"
    :height="size"
    :stroke="color"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    class="lds-rolling"
    style="background: none;"
  >
    <circle
      cx="50"
      cy="50"
      fill="none"
      stroke-width="5"
      r="35"
      stroke-dasharray="164.93361431346415 56.97787143782138"
      transform="rotate(119.851 50 50)"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        calcMode="linear"
        values="0 50 50;360 50 50"
        keyTimes="0;1"
        dur="0.8s"
        begin="0s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
</template>
<script>
/**
 * Generic VueJs SVG Spinner component, to be used as loading animation in other vue components
 *
 * @vue-prop {Number} size=50 - width/height dimension in pixel
 * @vue-prop {String} color='#444' - hex value for spinner color
 * @example
 * <template>
 * <!--  in another vue component template...
 * use boolean data 'loading' to show/hide loading spinner -->
 * <Spinner v-if="loading" />
 * </template>
 * @exports components/common/Spinner
 */
export default {
  props: {
    size: {
      type: Number,
      required: false,
      default: 50,
    },
    color: {
      type: String,
      required: false,
      default: '#4d4d4d',
    },
  },
};
</script>
