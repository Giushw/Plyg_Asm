<template>
  <div class="slideshow-wrapper">
    <carousel class="slideshow"
      :per-page="1"
      :navigationEnabled="true"
      :loop="true"
      paginationActiveColor="#ffffff"
      paginationColor="#706e68"
    >
      <slide class="slideshow-slide">
        <picture class="">
          <img src="../../assets/images/slide-hello.jpg"
            alt="Hello Slide"
            class="__img"
          >
        </picture>
      </slide>
      <slide class="slideshow-slide">
        <picture class="">
          <img src="../../assets/images/slide-circle.jpg"
            alt="Circle Slide"
            class="__img"
          >
        </picture>
      </slide>
      <slide class="slideshow-slide">
        <picture class="">
          <img src="../../assets/images/slide-play.jpg"
            alt="Play Slide"
            class="__img"
          >
        </picture>
      </slide>
    </carousel>
  </div>
</template>

<script>
export default {
  name: 'slideshow',
};
</script>
