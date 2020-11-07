<template>
  <div class="Register mx-auto">
    <b-form>
      <b-input id="email" v-model.trim="$v.email.$model" :class="['mb-12', { 'input--error': $v.email.$error }]" type="email" placeholder="Mail*" />
      <b-input id="password" v-model.trim="$v.password.$model" :class="['mb-12', { 'input--error': $v.email.$error }]" type="password" placeholder="Password*" />
      <Loading v-if="isLoading" />
      <div v-else>
        <b-button variant="primary" class="font-weight-bold" @click="register">Register</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators"
import { mapGetters } from 'vuex'
import {
  CREATE_USER
} from '@/constants/actions-type'
import Errors from '@/mixins/Errors'
import _ from 'lodash'

export default {
  name: "Register",
  mixins: [Errors],
  data() {
    return {
      isLoading: false,
      email: `test${_.random(1, 1000)}@test.com`,
      password: `test${_.random(1, 1000)}`,
    }
  },
  computed: {
    ...mapGetters(['getCurrentUser'])
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6),
    },
  },
  methods: {
    async register() {
      this.$v.$touch()
      if (!this.$v.email.required) {
        this.displayNotification('Please enter a mail address', 'danger')
        return
      } else if (!this.$v.email.email) {
        this.displayNotification('Please enter a valid mail address', 'danger')
        return
      } else if (!this.$v.password.required) {
        this.displayNotification('Please enter a password', 'danger')
        return
      } else {
        this.isLoading = true
        this.$store.dispatch(CREATE_USER, {
          email: this.email,
          password: this.password
        })
        .finally(() => {
          this.isLoading = false
        })
      }
    },
  },
}
</script>

