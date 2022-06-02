<script setup>
import { onBeforeMount, ref } from 'vue';
import axios from 'axios';
import UserPreview from './UserPreview.vue';

var users = ref(null);

onBeforeMount(
  async function() {
    axios.get(
      'https://jsonplaceholder.typicode.com/users'
    )
    .then(res => {
      users.value = res.data;
    });
  }
);
</script>

<template>
  <h1 class="view-title">
    Пользователи
  </h1>
  <UserPreview 
    v-if="users"
    v-for="user in users"
    :key="user.id"
    :id="user.id"
    :name="user.name"
  />
</template>

<style>

@font-face {
  font-family: 'Open Sans';
  src: local('Open Sans'), url('../fonts/open-sans');
}

.view-title {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 40px;
  color: #000000;
}
</style>