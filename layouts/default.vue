<template>
  <div class="position-relative">
    <Notification v-if="getNotification" :content="getNotification" />
    <div v-if="getCurrentUser">
      <Header />
      <div class="container my-5">
        <h2 class="text-capitalize">{{ $nuxt.$route.name }}</h2>
        <Nuxt />
      </div>
    </div>
    <div v-else class="container pt-5" style="max-width: 300px;">
      <Login v-if="login" />
      <Register v-else />
      <p class="text-primary py-12" @click="login = !login">{{ login ? 'Create an account' : 'Login' }}</p>
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
  data() {
   return {
    login: true
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