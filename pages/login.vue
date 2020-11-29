<template>
  <div class="Login--page position-relative">
    <Notification v-if="getNotification" :content="getNotification" />
    <div v-if="getCurrentUser">
      <Header />
    </div>
    <div v-else class="container pt-5" style="max-width: 300px;">
      <b-button class="bg-facebook" variant="facebook">Login with Facebook</b-button>
      <hr>
      <Login v-if="status === 'login'" />
      <Register v-if="status === 'register'" />
      <Reset v-if="status === 'reset'" @backToLogin="status = 'login'" />
      <div class="d-flex flex-column flex-wrap">
        <p v-for="(statusName, statusIndex) in statusList" :key="statusIndex" class="text-primary m-0 cursor-pointer" @click="status = statusIndex">{{ statusName }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  SET_CURRENT_USER
} from '../constants/actions-type'

export default {
  name: "Default",
  layout: "login",
  data() {
   return {
    status: 'login',
    statusList: {
      login: 'Login',
      register: 'Create an account',
      reset: 'Reset my password'
    }
   }
  },
  computed: {
   ...mapGetters(["getNotification", "getCurrentUser"])
  },
  mounted() {
   let store = this.$store
   this.$fireAuth.onAuthStateChanged(function() {
    store.dispatch(SET_CURRENT_USER)
   })
  },
}
</script>