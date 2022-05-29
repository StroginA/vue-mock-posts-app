<script setup>
import { onBeforeMount, ref } from 'vue';
import axios from 'axios';
import UserPreview from './UserPreview.vue';

var users = ref(null);

onBeforeMount(
  async () => {
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
  <h1>
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
