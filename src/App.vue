<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { onMounted, ref } from 'vue';

var accessibilityMode = ref(false);

function handleAccessibilityMode() {
  if (accessibilityMode == true) {
    accessibilityMode = false;
		document.body.classList.remove("accessibility-mode");
		localStorage.setItem("accessibility-mode", "false");
	} else {
    accessibilityMode = true;
		document.body.classList.add("accessibility-mode");
		localStorage.setItem("accessibility-mode", "true");
	}
}

onMounted(() => {
  document.body.setAttribute("accessibility-mode", localStorage.getItem("accessibility-mode"));
})
</script>

<template>
  <header class="nav">
    <h1 class="logo">
      <RouterLink class="router-link" to="/">
        Concert CLUB
      </RouterLink>
    </h1>
    <button class="nav-btn" @click="handleAccessibilityMode">
      <span>
        Версия для слабовидящих
      </span>
    </button>
  </header>
  <br>
  <RouterView class="content"/>
</template>

<style>
@import '@/assets/base.css';

@font-face {
  font-family: 'Alegreya Sans SC';
  src: local('Alegreya Sans SC'), url('./fonts/alegreya-sans-sc/AlegreyaSansSC-Regular.ttf');
}

@font-face {
  font-family: 'Proxima Nova';
  src: local('Proxima Nova'), url('./fonts/Proxima-Nova-Font/ProximaNova-Regular.otf');
}

#app {
  margin: 0 0;
  font-weight: normal;
  background-color: #E5E5E5;
  min-height: 100%;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.nav {
  top: 0;
  left: 0;
  display: flex;
  padding: 1rem 5rem;
  background: #101010;
  justify-content: start;
}

.logo {
  font-family: 'Alegreya Sans SC';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  text-align: start;
  text-transform: uppercase;
  color: #FFFFFF;
  margin-right: auto;
  align-self: center;
}

.nav-btn {
  padding: 0rem 2rem;
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  background-color: #FFFFFF;
  border: none;
}

.content {
  padding-top: 1rem;
  padding-right: 5rem;
  padding-left: 5rem;
  padding-bottom: 5rem;
  min-height: 100vh;
  height: 100%;
  background-color: #E5E5E5;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

.router-link {
  color: unset;
}

</style>
