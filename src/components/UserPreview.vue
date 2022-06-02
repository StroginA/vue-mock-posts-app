<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    id: Number,
    name: String
});
</script>

<template>
<div class="card">
    <RouterLink :to="'/user/' + props.id">
        {{ props.name }}
    </RouterLink>
</div>
</template>

<style>
</style>