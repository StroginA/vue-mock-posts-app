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
<div v-if="user" class="user-container">
  <div>
  <h1 class="view-title">
    {{this.user.username}}
  </h1>
  </div>
  <div class="user-info">
    <div class="user-info-item">
      <h3>
        {{this.user.name}}
      </h3>
    </div>
    <div class="user-info-item">
      <h3>
        {{this.user.email}}
      </h3>
    </div>
    <div class="user-info-item">
      <h3>
        {{this.user.phone}}
      </h3>
    </div>
    <div class="user-info-item">
      <h3>
        {{this.user.website}}
      </h3>
    </div>
    <div class="user-info-item">
      <h3>
        {{this.user.company.name}}
      </h3>
      <h4>
        {{this.user.company.bs}}
      </h4>
    </div>
  </div>
  <br>
  <h1 class="view-title">
      Посты
  </h1>
  <div class="post-list">
  <PostPreview
  v-if="posts"
  v-for="post in posts.slice(0,3)"
  :key="post.id"
  :userId="post.userId"
  :id="post.id"
  :title="post.title"
  :body="post.body"
  />
  </div>
  <div>
      <br>
      <RouterLink class="btn" :to="props.id + '/posts'">
        Смотреть все посты...
      </RouterLink>
  </div>
</div>
</template>

<style>

@font-face {
  font-family: 'Open Sans';
  src: local('Open Sans'), url('../fonts/open-sans');
}

.user-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.user-info {
  display: flex;
  margin-right: auto;
  padding-top: 1em;
  padding-bottom: 1em;
}
.user-info-item {
  padding: 0.5em 1em 0.5em 1em;
  outline: 1px solid #000000;
  font-family: 'Open Sans';
  color: #000000;
}
.post-list {
  display: flex;
  padding-top: 1em;
  padding-bottom: 1em;
}
.btn {
  border: none;
  padding: 1rem 2rem;
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
  background-color: #000000;
  border: none;
}
</style>