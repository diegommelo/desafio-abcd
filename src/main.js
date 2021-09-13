import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { dom } from "@fortawesome/fontawesome-svg-core";
import BaseInput from "@/components/Base/BaseInput";
import BaseLabel from "@/components/Base/BaseLabel";
import BaseButton from "@/components/Base/BaseButton";
import BaseCard from "@/components/Base/BaseCard";
import Logo from "@/components/Logo";

library.add(fas);
dom.watch();

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("b-input", BaseInput);
Vue.component("b-label", BaseLabel);
Vue.component("b-button", BaseButton);
Vue.component("b-card", BaseCard);
Vue.component("Logo", Logo);

Vue.config.productionTip = false;

let app = "";
firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});