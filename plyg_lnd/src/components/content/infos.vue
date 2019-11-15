<template>
  <div class="infoTab-wrapper">
    <div class="grid-wrapper ">
      <div class="grid-row -padded">
        <div class="grid-column -thirtyFive">
          <div class="info-tabs">
            <div class="tab-wrapper"
              :class="{ 'is-active': openTab === 'first' }"
              @click="selectTab('first')"
            >
              <div class="__subtitle">
                Vestibulum at odio sit amet
              </div>
              <font-awesome-icon :icon="['fas', 'angle-right']"></font-awesome-icon>
            </div>
            <div class="tab-wrapper"
              :class="{ 'is-active': openTab === 'second' }"
              @click="selectTab('second')"
            >
              <div class="__subtitle">
                Sed vehicula neque
              </div>
              <font-awesome-icon :icon="['fas', 'angle-right']"></font-awesome-icon>
            </div>
            <div class="tab-wrapper"
              :class="{ 'is-active': openTab === 'third' }"
              @click="selectTab('third')"
            >
              <div class="__subtitle">
                Nulla id libero pretium
              </div>
              <font-awesome-icon :icon="['fas', 'angle-right']"></font-awesome-icon>
            </div>
          </div>
        </div>
        <div class="grid-column -sixtyFive">
          <transition name="fade-in" mode="out-in">
            <div id="infoText" class="info-text" :key="loading">
              <spinner v-if="loading" />
              <p class="__subtitle -light" v-else>
                {{ parsedRespose.content }}
              </p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiCall from '../../libs/axiosConf';
import spinner from '../common/spinner.vue';

export default {
  name: 'infos',
  components: {
    spinner,
  },
  data() {
    return {
      openTab: 'first',
      loading: null,
      info: null,
    };
  },
  props: {
    isMobile: {
      type: Boolean,
      required: true,
    },
  },
  created() {
    this.loading = true;
    apiCall.mock
      .get('mocks/tab1.json')
      .then((response) => {
        setTimeout(() => {
          this.loading = false;
        }, 3000);
        this.info = response.data;
      })
      .catch((e) => {
        // eslint-disable-next-line
        console.log(e.message);
      });
  },
  computed: {
    parsedRespose() {
      if (this.info != null) {
        const tempResponse = { ...this.info.item };
        const parsedRespose = {
          title: tempResponse.title,
          content: tempResponse.content.join(' '),
        };
        return parsedRespose;
      }
      return null;
    },
  },
  methods: {
    selectTab(tab) {
      this.openTab = tab;
      this.apiwrapper(tab);
    },
    apiwrapper(type) {
      this.loading = true;
      let address;

      if (type === 'first') {
        address = 'mocks/tab1.json';
      } else if (type === 'second') {
        address = 'mocks/tab2.json';
      } else if (type === 'third') {
        address = 'mocks/tab3.json';
      } else {
        address = 'mocks/tab1.json';
      }

      apiCall.mock
        .get(address)
        .then((response) => {
          setTimeout(() => {
            this.loading = false;
          }, 3000);
          this.info = response.data;
        })
        .catch((e) => {
          // eslint-disable-next-line
          console.log(e.message);
        });

      if (this.isMobile) {
        document.getElementById('infoText').scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
      }
    },
  },
};
</script>
