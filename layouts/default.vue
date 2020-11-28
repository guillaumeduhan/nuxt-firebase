<template>
  <div class="Default--Layout">
    <nuxt-child />
  </div>
</template>

<script>
export default {
  middleware: 'auth',
}
</script>