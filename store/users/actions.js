import firebase from 'firebase/app'
import 'firebase/firestore'

import {
  CREATE_NEW_USER,
  CREATE_NOTIFICATION
} from "../../constants/actions-type.js"

const collection = 'users'

export default {
  [CREATE_NEW_USER]: ({ commit, dispatch }, user) => {
    return firebase
      .firestore()
      .collection(collection)
      .doc(user.id)
      .set({ ...user })
      .then(() => {
        dispatch(CREATE_NOTIFICATION, {
          message: 'Account created',
          type: 'success'
        }, { root: true })
        commit('SET_USER', user)
      })
  },
}