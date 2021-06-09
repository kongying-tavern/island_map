import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
//引入Leaflet插件
import * as L from 'leaflet'
import "leaflet/dist/leaflet.css";

Vue.L = Vue.prototype.$L = L

Vue.use(VueI18n)

Vue.config.productionTip = false

//国际化
const i18n = new VueI18n({
	locale: "zh", // 定义默认语言为中文
	// messages: {
	// 	zh: require("./i18n/zh.json"), //语言包所在的文件位置
	// 	en: require("./i18n/en.json"),
  //   jp: require("./i18n/jp.json"),
	// }
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')