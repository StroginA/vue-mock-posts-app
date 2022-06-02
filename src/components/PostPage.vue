<script setup>
import { onBeforeMount, ref } from 'vue';
import axios from 'axios';

var post = ref(null);
var comments = ref(null);
var displayCommentForm = ref(false);
var commentName = ref("");
var commentEmail = ref("");
var commentBody = ref("");
const props = defineProps({
    id: Number
});

onBeforeMount(
  async () => {
    axios.get(
      'https://jsonplaceholder.typicode.com/posts/' + props.id
    )
    .then(res => {
      post.value = res.data;
    });
    axios.get(
      'https://jsonplaceholder.typicode.com/posts/' + props.id + '/comments'
    )
    .then(res => {
      comments.value = res.data;
    });
  }
);

function onSubmit(e) {
    e.preventDefault();
    axios.post(
        'https://jsonplaceholder.typicode.com/posts/' + props.id + '/comments',
        {
            postId: props.id,
            name: commentName.value,
            email: commentEmail.value,
            body: commentBody.value
        },
    )
    .then(res => {
        alert(
            `
            Комментарий отправлен!
            Имя: ${res.data.name}
            Email: ${res.data.email}
            Комментарий: ${res.data.body}
            `
        );
    });
}
</script>

<template>
<div v-if="post">
  <h1>
    {{this.post.title}}
  </h1>
  <div>
    {{this.post.body}}
  </div>
  <h1>
    Комментарии
  </h1>
  <li
  v-if="comments"
  v-for="comment in comments"
  >
    <h3>
        {{comment.name}}
    </h3>
    <h4>
        {{comment.email}}
    </h4>
    <br>
    <div>
        {{comment.body}}
    </div>
    <hr>
  </li>
  <br>
    <button v-if="!displayCommentForm" @click="()=>{displayCommentForm=true}">
    <span>
        Оставить комментарий...
    </span>
    </button>
    <form v-if="displayCommentForm">
        <label for="commentName">
            Имя:
        </label>
        <input 
        id="commentName" 
        type="text"
        v-model="commentName"
        >
        <br>
        <label for="commentEmail">
            Email:
        </label>
        <input 
        id="commentEmail" 
        type="text"
        v-model="commentEmail"
        >
        <br>
        <label for="commentBody">
            Комментарий:
        </label>
        <textarea
        id="commentBody"
        v-model="commentBody"
        ></textarea>
        <br>
        <input 
        type="submit" 
        value="Отправить"
        @submit.prevent
        @click="onSubmit"
        >
    </form>
</div>
</template>

<style>
</style>