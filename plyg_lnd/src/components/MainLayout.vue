<template>
  <div class="page-wrap">
    <PageHeader/>
    <PageContent/>
    <PageFooter/>
  </div>
</template>

<script>
import PageHeader from './header/PageHeader.vue';
import PageContent from './content/PageContent.vue';
import PageFooter from './footer/PageFooter.vue';

export default {
  name: 'MainLayout',
  components: {
    PageHeader,
    PageContent,
    PageFooter,
  },
};
</script>
