<template>
  <div class="page-wrap">
    <PageHeader
      :deviceType="deviceType"
      @anchorWeAre="moveToWeAre"
      @anchorWeDo="moveToWeDo"
      @anchorCareers="moveToCareers"
      @anchorContacts="moveToContacts"
    />
    <PageContent
      :deviceType="deviceType"
    />
    <Fab
      v-if="deviceType === 'mobile'"
      @anchorWeAre="moveToWeAre"
      @anchorWeDo="moveToWeDo"
      @anchorCareers="moveToCareers"
      @anchorContacts="moveToContacts"
    />
    <PageFooter
      :deviceType="deviceType"
      @anchorWeAre="moveToWeAre"
      @anchorWeDo="moveToWeDo"
      @anchorCareers="moveToCareers"
      @anchorContacts="moveToContacts"
    />
    <Cookies
      :deviceType="deviceType"
    />
  </div>
</template>

<script>
import PageHeader from './header/PageHeader.vue';
import PageContent from './content/PageContent.vue';
import PageFooter from './footer/PageFooter.vue';
import Cookies from './common/cookie-policy.vue';
import Fab from './common/fab.vue';

export default {
  name: 'MainLayout',
  components: {
    PageHeader,
    PageContent,
    PageFooter,
    Cookies,
    Fab,
  },
  data() {
    return {
      window: {
        width: 0,
      },
    };
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  computed: {
    deviceType() {
      if (this.window.width >= 320 && this.window.width <= 560) {
        return 'mobile';
      }
      if (this.window.width >= 561 && this.window.width <= 1024) {
        return 'tablet';
      }
      if (this.window.width >= 1025) {
        return 'desktop';
      }
      return 'mobile';
    },
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
    },
    moveToWeAre() {
      document.getElementById('weare').scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    },
    moveToWeDo() {
      document.getElementById('wedo').scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    },
    moveToCareers() {
      document.getElementById('careers').scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    },
    moveToContacts() {
      document.getElementById('contacts').scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    },
  },
};
</script>
