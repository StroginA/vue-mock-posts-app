<script setup>
import { onBeforeMount, ref } from 'vue';
import axios from 'axios';
import PostPreview from './PostPreview.vue';

var posts = ref(null);
var username = ref(null);
const props = defineProps({
    id: Number
});

onBeforeMount(
  async () => {
    axios.get(
      'https://jsonplaceholder.typicode.com/posts?userId=' + props.id
    )
    .then(res => {
      posts.value = res.data;
    });
    axios.get(
      'https://jsonplaceholder.typicode.com/users/' + props.id
    )
    .then(res => {
      username.value = res.data.username;
    });
  }
);
</script>

<template>
  <div v-if="posts">
    <h1>
      Посты пользователя {{this.username}}
    </h1>
    <div class="post-list-full">
    <PostPreview
    v-for="post in posts"
    :key="post.id"
    :userId="post.userId"
    :id="post.id"
    :title="post.title"
    :body="post.body"
    />
    </div>
  </div>
</template>

<style>
.post-list-full {
  display: flex;
  flex-wrap: wrap;
  justify-items: stretch;
  padding-top: 1em;
  padding-bottom: 1em;
}
</style>