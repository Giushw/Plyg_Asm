<template>
  <div class="contacts-wrapper">
    <div class="grid-wrapper">
      <div class="grid-row -padded">
        <div class="grid-column -thirtyFive">
          <div class="contacs-info">
            <div class="__title -ginormous">
              contact us.
            </div>
            <div class="__subtitle">
              Playground srl
              Via G. Mazzini 3/C,
              Cernusco Sul Naviglio (Milano)
              -
              T +39 0240706003
              white-space: pre-line;
            </div>
          </div>
        </div>
        <div class="grid-column -sixtyFive">
          <form class="contacts-form">
            <div class="grid-row">
              <div class="grid-column">
                <input type="text">
              </div>
              <div class="grid-column">
                <input type="text">
              </div>
            </div>
            <div class="grid-row">
              <div class="grid-column">
                <input type="email" name="" id="">
              </div>
            </div>
            <div class="grid-row">
              <div class="grid-column">
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
            </div>
            <button class="__btn -inverted">
              Send
              <font-awesome-icon :icon="['fas', 'angle-right']"></font-awesome-icon>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contacts',
};
</script>
