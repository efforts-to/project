import Vue from 'vue'
import VueX from 'vuex'

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import modules from "./modules";


Vue.use(VueX)

const store = new VueX.Store({
  state:{
    cartList:[]
  },
  mutations,
  getters,
  actions,
  modules
})

export default store;
