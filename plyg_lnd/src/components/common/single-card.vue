<template>
  <article class="card-wrapper">
    <header class="card-heading"
      :class="{
        '-play': image === 'play',
        '-simply': image === 'simply',
        '-inno': image === 'inno'
        }"
    >
    </header>
    <div class="card-body">
      <p class="__description">
        {{ description }}
      </p>
    </div>
    <footer class="card-footer">
      <button class="__btn -full">
        {{ cta }}
      </button>
    </footer>
  </article>
</template>

<script>
export default {
  name: 'single-card',
  props: {
    image: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: 'Article image',
    },
    description: {
      type: String,
      required: true,
    },
    cta: {
      type: String,
      default: 'Read More',
    },
  },
};
</script>
