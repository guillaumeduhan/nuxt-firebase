<template>
  <div :class="[`Notification bg-${content.type} text-white text-center p-12 w-100 position-absolute top-0`]">
    {{ content.message }}
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    content: {
      type: Object,
      default: () => {}
    }
  }
}
</script>