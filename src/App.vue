<template>
  <div>
    <div class="left">
      <Menu/>
    </div>

    <div class="right">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";

import Menu from "./components/Menu.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.left {
  position: fixed;
}
.right {
  margin-left: 200px;
}
</style>
