<script setup>
import PostList from '../components/PostList.vue';
</script>

<template>
  <main>
    <PostList :id="parseInt($route.params.userId)"/>
  </main>
</template>