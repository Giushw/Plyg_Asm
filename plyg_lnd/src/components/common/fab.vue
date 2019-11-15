<template>
  <div class="fab-container">
    <div class="radial-wrapper"
      :class="{ 'is-open': openFab }"
    >
      <font-awesome-icon id="fabFirstBtn"
        :icon="['fas', 'id-card-alt']"
        size="2x"
        @click="callToWeAre"
      >
      </font-awesome-icon>
      <font-awesome-icon id="fabSecondBtn"
        :icon="['fas', 'terminal']"
        size="2x"
        @click="callToWeDo"
      >
      </font-awesome-icon>
      <font-awesome-icon id="fabThirdBtn"
        :icon="['fas', 'briefcase']"
        size="2x"
        @click="callToCareers"
      >
      </font-awesome-icon>
      <font-awesome-icon id="fabFourthBtn"
        :icon="['fas', 'envelope']"
        size="2x"
        @click="callToContacts"
      >
      </font-awesome-icon>
      <button class="fab-btn">
        <font-awesome-icon id="plus"
          :icon="['fas', 'location-arrow']"
          size="2x"
          @click="toggleFab"
        >
        </font-awesome-icon>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fab',
  data() {
    return {
      openFab: false,
    };
  },
  created() {

  },
  methods: {
    toggleFab() {
      this.openFab = !this.openFab;
    },
    callToWeAre() {
      this.openFab = false;
      this.$emit('anchorWeAre');
    },
    callToWeDo() {
      this.openFab = false;
      this.$emit('anchorWeDo');
    },
    callToCareers() {
      this.openFab = false;
      this.$emit('anchorCareers');
    },
    callToContacts() {
      this.openFab = false;
      this.$emit('anchorContacts');
    },
  },
};
</script>
