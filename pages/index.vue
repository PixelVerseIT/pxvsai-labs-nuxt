<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <h1>PixelVerseAI Labs - Project Horizon</h1>
    <p>OPEN-SOURCE PREVIEW</p>
    <p>View stable version at: <a href="https://ai.pixelverse.tech/app">https://ai.pixelverse.tech/app</a></p>
    <p>--</p>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
  </div>
</template>


