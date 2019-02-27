import Vue from 'vue'
import Vuex from 'vuex'

import imdb from './imdb'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      imdb
    }
  })

  return Store
}
