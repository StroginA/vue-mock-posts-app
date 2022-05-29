<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="topnav">
    <h1 class="logo">
      <RouterLink to="/">
        TEST
      </RouterLink>
    </h1>
    <button>
      <span>
        Версия для слабовидящих
      </span>
    </button>
  </header>
  <br>
  <RouterView />
</template>

<style>
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.topnav {
  background: #101010;
}

.logo {
  font-family: 'Alegreya Sans SC';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 60px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

</style>
