<template>
  <div class="info-wrapper">
    <div class="grid-wrapper ">
      <div class="grid-row -padded">
        <div class="grid-column">
          <div class="info-tabs">
            <div class="tab-wrapper">
              <div class="tab-text">
                TXT
              </div>
              <font-awesome-icon :icon="['fas', 'angle-right']"></font-awesome-icon>
            </div>
            <div class="tab-wrapper"></div>
            <div class="tab-wrapper"></div>
          </div>
        </div>
        <div class="grid-column">
          <div class="info-text">
            <p>
              
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'info',
  data() {
    return {
    };
  },
};
</script>
