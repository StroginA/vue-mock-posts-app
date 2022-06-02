<script setup>
import UserPage from '../components/UserPage.vue';
</script>

<template>
  <main>
    <UserPage :id="parseInt($route.params.userId)"/>
  </main>
</template>