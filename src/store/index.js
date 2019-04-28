/* // https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: (state) => {
      const obj = state
      obj.count += 1
    },
    decrement: (state) => {
      const obj = state
      obj.count -= 1
    }
  }
})

export default store */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import counter from './modules/counter';

import getters from './getters';

const store = new Vuex.Store({
  modules: {
    counter
  },
  getters
})

//main.js中需要额外引入
export default store;
