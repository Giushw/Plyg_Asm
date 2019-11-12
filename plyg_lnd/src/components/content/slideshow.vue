<template>
  <div class="slideshow-wrapper">
    <div class="grid-wrapper">
      <carousel class="slideshow"
        :per-page="1"
        :loop="true"
        :navigationEnabled="true"
        paginationActiveColor="#ffffff"
        paginationColor="#706e68"
        paginationPosition="bottom-overlay"
        :paginationPadding="13/2"
        :paginationSize="10"
        :navigation-next-label="nextLabel"
        :navigation-prev-label="prevLabel"
      >
        <slide class="slideshow-slide">
            <img src="../../assets/images/slide-hello.jpg"
              alt="Hello Slide"
              class="__img"
            >
        </slide>
        <slide class="slideshow-slide">
            <img src="../../assets/images/slide-circle.jpg"
              alt="Circle Slide"
              class="__img"
            >
        </slide>
        <slide class="slideshow-slide">
            <img src="../../assets/images/slide-play.jpg"
              alt="Play Slide"
              class="__img"
            >
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slideshow',
  data() {
    return {
      nextLabel: "<img src='../../assets/images/chevron-right.svg' />",
      prevLabel: "<img src='../../assets/images/chevron-left.svg' />",
    };
  },
};
</script>
