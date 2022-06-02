<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    userId: Number,
    id: Number,
    title: String,
    body: String
});
</script>

<template>
<RouterLink class="router-link" :to="'/user/' + props.userId + '/posts/' + props.id">
    <div class="post-card">
        <h2 class="post-card-title">
            <p>{{props.title}}</p>
        </h2>
        <div class="post-card-body">
            <p>{{props.body}}</p>
        </div>
    </div>
</RouterLink>
</template>

<style>
@font-face {
  font-family: 'Open Sans';
  src: local('Open Sans'), url('../fonts/open-sans/OpenSans-Regular.ttf');
}
.post-card {
    font-family: 'Open Sans';
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    flex-direction: column;
    flex-grow: 1;
    border: 1px solid #DADADA;
    margin-left: auto;
    margin-right: 1em;
    margin-top: auto;
    margin-bottom: 1em;
    padding: 0.5em 1em 1em 1em;
    max-width: 30vw;
}
.post-card-title {
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    white-space: wrap;
    color: #000000;
}
.post-card-body {
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: auto;
    color: rgba(0, 0, 0, 0.41);
}
.post-card:hover {
    border: 1px solid #000000;
}
</style>