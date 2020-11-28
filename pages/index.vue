<template>
  <div class="container">
    <div class="container my-5">
      <h2 class="text-capitalize">{{ $nuxt.$route.name }}</h2>
      <Nuxt />
    </div>
  </div>
</template>

<script>


export default {
 name: "Index",
}
</script>
