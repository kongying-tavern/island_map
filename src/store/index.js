import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //点位类型
    options_type:'',
    selected_options:[]
  },
  mutations: {
    update_type(state,type)
    {
      state.options_type=type;
    },
  },
  actions: {
  },
  modules: {
  }
})
