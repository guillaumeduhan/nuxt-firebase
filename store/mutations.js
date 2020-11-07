import Vue from 'vue'

import {
  SET_NOTIFICATION,
  SET_USER
} from "../constants/mutations-type.js"

export default {
  [SET_NOTIFICATION]: (state, notification) => {
    Vue.set(state, 'notification', notification)
  },
  [SET_USER]: (state, user) => {
    Vue.set(state, 'user', user)
  }
}