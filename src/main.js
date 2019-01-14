import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import VeeValidate from "vee-validate";
Vue.use(VeeValidate);

import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);

import ToggleButton from "vue-js-toggle-button";
Vue.use(ToggleButton);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

Vue.use(router);
