import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueClipboard from 'vue-clipboard2'
import VueLazyload from 'vue-lazyload'

import { api_game } from '@/api/api'
import { utils, floatObj } from '@/utils/utils'
import config from "@/assets/config/index"
import i18n from '@/lang/index';
import { Checkbox, CheckboxGroup, Loading,Toast ,Icon,Popup } from 'vant';
import 'vant/lib/index.css'

import WOW from 'wowjs'
import $ from 'jquery';
import '@/assets/css/bootstrap.min.css'
// 移动端适配
import '@/utils/flexible'
// import './web3'
// css base.css
import '@/assets/font/css/font-awesome.min.css'
import '@/assets/css/base.css'
// import '@/assets/css/responsive.css'
import '@/assets/css/normalize.min.css'
import '@/assets/css/smartslider.min.css'
import '@/assets/css/animate.min.css'



import '@/assets/css/style.css'

//接口
Vue.prototype.$request = api_game
// 公共方法 utils
Vue.prototype.$utils = utils
Vue.prototype.$floatObj = floatObj
// config
Vue.prototype.$config = config
// 全局toast
Vue.prototype.$Toast = Toast

VueClipboard.config.autoSetContainer = true
Vue.use(Icon)
Vue.use(Toast)
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Loading);
Vue.use(VueClipboard)
Vue.use(VueLazyload)
Vue.use(WOW);
Vue.use(Popup)
Vue.prototype.$WOW = WOW

Vue.config.productionTip = false
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
