import Vue from 'vue';
import Siema from 'vue2-siema';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import './registerServiceWorker';

library.add(faUserSecret, faCircleNotch);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(Siema);

new Vue({
  render: h => h(App),
}).$mount('#app');
