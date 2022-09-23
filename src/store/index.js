import Vuex from 'vuex'
import Vue from 'vue'
import VuexModule from './modules/store'
Vue.use(Vuex);
const store = new Vuex.Store(VuexModule)
export default store;
