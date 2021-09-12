import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { initializeApp } from "firebase/app";
import config from "./config/firebase-config.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { dom } from "@fortawesome/fontawesome-svg-core";
import BaseInput from "@/components/Base/BaseInput";
import BaseLabel from "@/components/Base/BaseLabel";
import BaseButton from "@/components/Base/BaseButton";
import Logo from "@/components/Logo";

library.add(fas);
dom.watch();

initializeApp(config);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("b-input", BaseInput);
Vue.component("b-label", BaseLabel);
Vue.component("b-button", BaseButton);
Vue.component("Logo", Logo);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
