
<template>
  <div class="d-container">
    <Header />

    <div class="content">
      <NuxtPage />
    </div>
    
    
  </div>
</template>

<script>
import '~/assets/style.css'
import Header from '~/components/header.vue' // Import your Header component

export default {
  components: { Header } // Register your Header component
}
</script>
