<template>
  <div class="page-wrap">
    <PageHeader/>
    <PageContent/>
    <PageFooter/>
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
};
</script>
