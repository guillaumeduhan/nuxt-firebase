<template>
  <div class="Reset mx-auto">
    <b-form>
      <b-input id="email" v-model.trim="$v.email.$model" :class="['mb-12', { 'input--error': $v.email.$error }]" type="email" placeholder="Mail*" />
      <Loading v-if="isLoading" />
      <div v-else>
        <b-button variant="primary" class="font-weight-bold" @click="reset">Reset my password</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { email, required } from "vuelidate/lib/validators"
import {
  RESET_PASSWORD
} from '../../constants/actions-type'
import Errors from '@/mixins/Errors'

export default {
  name: "Reset",
  mixins: [Errors],
  data() {
    return {
      isLoading: false,
      email: undefined,
    }
  },
  validations: {
    email: {
      required,
      email
    },
  },
  methods: {
    async reset() {
      this.$v.$touch()
      if (!this.$v.email.required) {
        this.displayNotification('Please enter a mail address', 'danger')
        return
      } else {
        this.isLoading = true
        this.$store.dispatch(RESET_PASSWORD, this.email)
        .then(() => {
          this.displayNotification(`Success! Check ${this.email} to create your new password.`, 'success')
          this.email = undefined
          this.$emit('backToLogin')
        })
        .catch((err) => {
          this.displayNotification(err.message, 'danger')
        })
        .finally(() => {
          this.isLoading = false
        })
      }
    },
  },
}
</script>

