<template>
  <div class="page-wrap">
    <PageHeader
      :isMobile="isMobile"
      @anchorWeAre="moveToWeAre"
      @anchorWeDo="moveToWeDo"
      @anchorCareers="moveToCareers"
      @anchorContacts="moveToContacts"
    />
    <PageContent
      :isMobile="isMobile"
    />
    <Fab
      v-if="isMobile"
      @anchorWeAre="moveToWeAre"
      @anchorWeDo="moveToWeDo"
      @anchorCareers="moveToCareers"
      @anchorContacts="moveToContacts"
    />
    <PageFooter
      :isMobile="isMobile"
      @anchorWeAre="moveToWeAre"
      @anchorWeDo="moveToWeDo"
      @anchorCareers="moveToCareers"
      @anchorContacts="moveToContacts"
    />
    <Cookies
      :isMobile="isMobile"
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
        height: 0,
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
    isMobile() {
      if (/Mobi|Android/i.test(navigator.userAgent)) {
        return true;
      }
      return false;
    },
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
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
