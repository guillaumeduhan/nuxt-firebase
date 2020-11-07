import {
  CREATE_NOTIFICATION
} from "../constants/actions-type"

export default {
  methods: {
    displayNotification(message, type) {
      this.$store.dispatch(CREATE_NOTIFICATION, {
        type: type,
        message: message
      }, { root: true })
    },
  }
}