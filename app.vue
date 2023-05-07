<template>
  <v-app>
    <!-- <NuxtLoadingIndicator /> -->
    <VitePwaManifest />
    <v-container style="position: relative" class="pb-0">
      <NuxtLayout>
        <NuxtPage/>
      </NuxtLayout>
    </v-container>
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
    transition: all 0.4s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }
  .layout-enter-active,
  .layout-leave-active {
    transition: all 0.4s;
  }
  .layout-enter-from,
  .layout-leave-to {
    filter: grayscale(1);
  }
</style>