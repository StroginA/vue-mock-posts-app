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
<div class="post-container" v-if="post">
  <h1 class="view-title">
    {{this.post.title}}
  </h1>
  <div class="post-body">
    {{this.post.body}}
  </div>
  <h1 class="view-title">
    Комментарии
  </h1>
  <div
  class="comment"
  v-if="comments"
  v-for="comment in comments"
  >
    <h3 class="comment-name">
        {{comment.name}}
    </h3>
    <h4 class="comment-email">
        {{comment.email}}
    </h4>
    <div class="comment-body">
        {{comment.body}}
    </div>
  </div>
  <br>
    <button class="btn" v-if="!displayCommentForm" @click="()=>{displayCommentForm=true}">
    <span>
        Оставить комментарий...
    </span>
    </button>
    <form class="comment-form" v-if="displayCommentForm">
        <label class="comment-form-label" for="commentName">
            Имя:
        </label>
        <input 
        id="commentName" 
        type="text"
        v-model="commentName"
        >
        <br>
        <label class="comment-form-label" for="commentEmail">
            Email:
        </label>
        <input 
        id="commentEmail" 
        type="text"
        v-model="commentEmail"
        >
        <br>
        <label class="comment-form-label" for="commentBody">
            Комментарий:
        </label>
        <textarea
        id="commentBody"
        v-model="commentBody"
        ></textarea>
        <br>
        <input class="btn comment-btn" 
        type="submit" 
        value="Отправить"
        @submit.prevent
        @click="onSubmit"
        >
    </form>
</div>
</template>

<style>
@font-face {
  font-family: 'Open Sans';
  src: local('Open Sans'), url('../fonts/open-sans');
}
.post-container {
  height: 100%;
}
.post-body {
  padding-top: 1em;
  padding-bottom: 1em;
  color: rgba(0, 0, 0, 0.41);
}
.comment {
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans';
  border: 1px solid #DADADA;
  margin-top: 1em;
  padding: 0.5em 1em;
}
.comment:hover {
  border: 1px solid #000000;
}
.comment-body {
  color: rgba(0, 0, 0, 0.41);
}
.comment-form {
  display: flex;
  flex-direction: column;
  min-width: 20rem;
  width: 30vw;
}
.comment-form-label {
  color: #000000;
  font-family: 'Open Sans';
}
.comment-btn {
  margin-top: 1rem;
  width: 30%;
  justify-self: left;
}
</style>