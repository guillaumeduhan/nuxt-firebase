<template>
  <div class="Login mx-auto">
    <b-form>
      <b-input id="user-mail" v-model.trim="$v.email.$model" :class="['mb-12', { 'input--error': $v.email.$error }]" type="email" placeholder="E-mail *" />
      <b-input id="password" v-model="$v.password.$model" :class="['mb-12', { 'input--error': $v.password.$error }]" type="password" placeholder="Password *" />
      <Loading v-if="isLoading" />
      <div v-else>
        <b-button variant="primary" class="font-weight-bold text-13" @click="submitLogin">Login</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import Errors from "@/mixins/Errors"
import {
  LOGIN
} from "@/constants/actions-type"
import { email, required } from "vuelidate/lib/validators"

export default {
  auth: false,
  name: "Login",
  mixins: [Errors],
  data() {
    return {
      isLoading: false,
      password: undefined,
      email: undefined,
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    },
  },
  methods: {
    async submitLogin() {
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
        try {
          this.$store.dispatch(LOGIN, {
            email: this.email,
            password: this.password
          })
          .finally(() => {
            this.isLoading = false
          })
        } catch (err) {
          this.displayNotification('Cannot login. Please try again.', 'danger')
        }
      }
    },
  },
}
</script>