<template>
  <div class="page-wrap">
    <PageHeader
      @anchorWeAre="moveToWeAre"
      @anchorWeDo="moveToWeDo"
      @anchorCareers="moveToCareers"
      @anchorContacts="moveToContacts"
    />
    <PageContent/>
    <PageFooter
      @anchorWeAre="moveToWeAre"
      @anchorWeDo="moveToWeDo"
      @anchorCareers="moveToCareers"
      @anchorContacts="moveToContacts"
    />
    <Cookies/>
  </div>
</template>

<script>
import PageHeader from './header/PageHeader.vue';
import PageContent from './content/PageContent.vue';
import PageFooter from './footer/PageFooter.vue';
import Cookies from './common/cookie-policy.vue';

export default {
  name: 'MainLayout',
  components: {
    PageHeader,
    PageContent,
    PageFooter,
    Cookies,
  },
  methods: {
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
