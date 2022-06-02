<script setup>
import PostPage from '../components/PostPage.vue';
</script>

<template>
  <main>
    <PostPage :id="parseInt($route.params.postId)"/>
  </main>
</template>