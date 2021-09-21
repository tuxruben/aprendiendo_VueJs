<template>
  <div id="app">
     <navbar></navbar>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

 <router-view></router-view>
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'

import navbar from './components/navbar.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    navbar
  }
}
</script>

<style>
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/
@import './assets/css/bootstrap.min.css';
@import './assets/css/bootstrap.css';
</style>
