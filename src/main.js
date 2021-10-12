import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";
import VueSVGIcon from "vue-svgicon";
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false;
Vue.use(VueSVGIcon);

Vue.mixin({
  methods: {
    t(id, ...params) {
      return this.$vuetify.lang.t("$vuetify." + id, ...params);
    }
  }
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
