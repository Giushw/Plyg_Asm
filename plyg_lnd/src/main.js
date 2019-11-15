import Vue from 'vue';
import VueCarousel from 'vue-carousel';
import Vuelidate from 'vuelidate';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCircleNotch,
  faAngleRight,
  faLocationArrow,
  faIdCardAlt,
  faTerminal,
  faBriefcase,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faFacebookSquare, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import './registerServiceWorker';

Vue.use(VueCarousel);
Vue.use(Vuelidate);

library.add(
  faCircleNotch,
  faComment,
  faAngleRight,
  faLocationArrow,
  faIdCardAlt,
  faTerminal,
  faBriefcase,
  faEnvelope,
  faFacebookSquare,
  faLinkedinIn,
  faInstagram,
);


// <i class="far fa-envelope"></i>

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
