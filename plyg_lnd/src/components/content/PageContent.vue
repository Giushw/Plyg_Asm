<template>
  <section class="page-content">
  <carousel :per-page="1"
    :navigationEnabled="true"
    :loop="true"
  >
      <slide>
        <picture class="">
          <img src="../../assets/images/slide-hello.jpg"
            alt="Hello Slide"
            class="__img"
          >
        </picture>
      </slide>
      <slide>
        <picture class="">
          <img src="../../assets/images/slide-circle.jpg"
            alt="Circle Slide"
            class="__img"
          >
        </picture>
      </slide>
      <slide>
        <picture class="">
          <img src="../../assets/images/slide-play.jpg"
            alt="Play Slide"
            class="__img"
          >
        </picture>
      </slide>
    </carousel>
  </section>
</template>

<script>
export default {
  name: 'PageContent',
};
</script>
