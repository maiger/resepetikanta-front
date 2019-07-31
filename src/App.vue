<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";
import { tryAutoLogin } from "./queries/user"

export default {
  components: {
    appHeader: Header
  },
  created() {
    tryAutoLogin()
  }
};
</script>