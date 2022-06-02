<script setup>
import { onBeforeMount, ref } from 'vue';
import axios from 'axios';
import PostPreview from './PostPreview.vue';

var user = ref(null);
var posts = ref(null);
const props = defineProps({
    id: Number
});

onBeforeMount(
  async () => {
    axios.get(
      'https://jsonplaceholder.typicode.com/users/' + props.id
    )
    .then(res => {
      user.value = res.data;
    });
    axios.get(
      'https://jsonplaceholder.typicode.com/posts?userId=' + props.id
    )
    .then(res => {
      posts.value = res.data;
    });
  }
);
</script>

<template>
<div v-if="user">
  <h1>
    {{this.user.username}}
  </h1>
  <div>
  <li>
    <h3>
      {{this.user.name}}
    </h3>
  </li>
  <li>
    <h3>
      {{this.user.email}}
    </h3>
  </li>
  <li>
    <h3>
      {{this.user.phone}}
    </h3>
  </li>
  <li>
    <h3>
      {{this.user.website}}
    </h3>
  </li>
  <li>
    <h3>
      {{this.user.company.name}}
    </h3>
    <h4>
        {{this.user.company.bs}}
    </h4>
  </li>
  </div>
  <h1>
      Посты
  </h1>
  <PostPreview
  v-if="posts"
  v-for="post in posts.slice(0,3)"
  :key="post.id"
  :userId="post.userId"
  :id="post.id"
  :title="post.title"
  :body="post.body"
  />
  <div>
      <br>
      <RouterLink :to="props.id + '/posts'">
        Смотреть все посты...
      </RouterLink>
  </div>
</div>
</template>

<style>
</style>