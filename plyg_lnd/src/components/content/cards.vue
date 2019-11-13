<template>
  <div class="cards-wrapper">
    <div class="grid-wrapper ">
      <div class="grid-row -gutted -padded">
        <SingleCard v-for="card in infoCards" :key="card.id"
        class="grid-column"
        :image="card.image"
        :description="card.description"
      />
      </div>
    </div>
  </div>
</template>

<script>
import SingleCard from '../common/single-card.vue';

export default {
  name: 'cards',
  components: {
    SingleCard,
  },
  data() {
    return {
      infoCards: [
        {
          image: 'play',
          description: 'Aenean mollis dolor a mattis viverra. In hac habitasse platea dictumst. Curabitur tempus dui tortor, et bibendum lacus eleifend ut.',
        },
        {
          image: 'simply',
          description: 'Donec vitae augue tellus. Proin et urna sit amet metus fermentum dapibus non quis urna.',
        },
        {
          image: 'inno',
          description: 'Suspendisse vehicula, lectus sed molestie aliquam, arcu neque gravida lacus.',
        },
      ],
    };
  },
};
</script>
