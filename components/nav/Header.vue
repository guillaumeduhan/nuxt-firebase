<template>
  <div class="Header d-flex align-items-center justify-content-between bg-primary text-white px-4 py-2">
    <div class="d-flex justify-content-center align-items-center">
      <p class="m-0 mr-2 text-uppercase">Nuxt-Firebase-Boilerplate</p>
      <div class="menu">
        <nuxt-link v-for="(el, index) in menu" :key="index" class="cursor-pointer text-white m-0 mr-3 text-underline" :to="el.route">{{ el.title }}</nuxt-link>
      </div>
    </div>
    <div>
      <b-button class="rounded" size="sm" variant="dark" @click="logout">Logout</b-button>
    </div>
  </div>
</template>

<script>
import {
 LOGOUT
} from '@/constants/actions-type'

export default {
  name: "Header",
  data() {
   return {
    menu: [{
     title: 'Main',
     route: '/'
    }]
   }
  },
  methods: {
    logout() {
      this.$store.dispatch(LOGOUT)
    },
  },
}
</script>
