import firebase from 'firebase/app'
import 'firebase/auth'

import {
  CREATE_NOTIFICATION,
  CREATE_USER,
  LOGIN,
  LOGOUT,
  RESET_PASSWORD,
  SET_CURRENT_USER
} from "../constants/actions-type.js"
import {
  SET_NOTIFICATION,
  SET_USER
} from "../constants/mutations-type.js"

export default {
  [CREATE_NOTIFICATION]: ({ commit }, notification) => {
    commit(SET_NOTIFICATION, notification)
    setTimeout(() => {
      commit(SET_NOTIFICATION, undefined)
    }, 6000)
  },
  [CREATE_USER]: ({ dispatch }, user) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((newUser) => {
        dispatch(LOGIN, {
          email: user.email,
          password: user.password
        })
        dispatch('users/CREATE_NEW_USER', {
          id: newUser.user.uid,
          email: newUser.user.email,
          photoUrl: newUser.user.photoUrl ? newUser.user.photoUrl : '',
          emailVerified: newUser.user.emailVerified
        }, { root: true })
      })
      .catch((err) => {
        dispatch(CREATE_NOTIFICATION, {
          message: err.message,
          type: 'danger'
        })
      })
  },
  [LOGIN]: ({ commit, dispatch }, payload) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(({ user }) => {
        commit(SET_USER, {
          id: user.uid,
          email: user.email,
          photoUrl: user.photoUrl,
          emailVerified: user.emailVerified
        })
      })
      .catch((err) => {
        dispatch(CREATE_NOTIFICATION, {
          message: err.message,
          type: 'danger'
        })
      })
  },
  [LOGOUT]: ({ commit }) => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        commit(SET_USER)
      })
  },
  [RESET_PASSWORD]: (__, email) => {
    console.log(email)
    console.log(typeof email)
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
  },
  [SET_CURRENT_USER]: ({ commit }) => {
    let user = firebase.auth().currentUser ? firebase.auth().currentUser : undefined
    let newUser = user ? {
      id: user.uid,
      email: user.email,
      photoUrl: user.photoUrl,
      emailVerified: user.emailVerified
    } : undefined
    commit(SET_USER, newUser)
  }
}