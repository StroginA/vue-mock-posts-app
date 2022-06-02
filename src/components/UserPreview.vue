<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    id: Number,
    name: String
});
</script>

<template>
<RouterLink class="router-link" :to="'/user/' + props.id">
    <div class="user-card">
        {{ props.name }}
    </div>
</RouterLink>
</template>

<style>

@font-face {
  font-family: 'Open Sans';
  src: local('Open Sans'), url('../fonts/open-sans/OpenSans-Regular.ttf');
}

.user-card {
    font-family: 'Open Sans';
    border: 1px solid #DADADA;
    margin-top: 1em;
    padding: 0.5em 1em;
    max-width: 15rem;
}

.user-card:hover {
    border: 1px solid #000000;
}
</style>