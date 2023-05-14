<script setup lang="ts">
  import { instance } from './api/instance';
  console.log("🚀 ~ file: app.vue:3 ~ instance:", instance.defaults.baseURL)
</script>
<template>
  <v-app>
    <NuxtLayout>
      <NuxtLoadingIndicator :throttle="0" />
      <VitePwaManifest />
      <NuxtPage/>
    </NuxtLayout>
  </v-app>
</template>
<style lang="scss">
  $font: 'Open Sans';
  $title-font: 'Rubik';
  .v-application {
    font-family: $font, sans-serif !important;
      .title { // To pin point specific classes of some components
        font-family: $title-font, sans-serif !important;
      }
  }
  .page-enter-active,
  .page-leave-active {
    transition: all 0.3s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }
  .layout-enter-active,
  .layout-leave-active {
    transition: all 0.3s;
  }
  .layout-enter-from,
  .layout-leave-to {
    filter: grayscale(1);
  }
  a{
    text-decoration: none;
  }
</style>