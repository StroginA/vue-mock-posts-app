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
<RouterLink :to="'/user/' + props.userId + '/posts/' + props.id">
    <div class="card">
        <h3>
            {{props.title}}
        </h3>
        <div>
            {{props.body}}
        </div>
    </div>
</RouterLink>
</template>

<style>
.card {
    text-overflow: ellipsis;
}
</style>