<template>
  <div class="root">
      <div class="menu">
          <router-link to="/first">文件管理</router-link>
          <router-link to="/second">第二个页面</router-link>
          <router-link to="/third">第三个页面</router-link>
      </div>
      <router-view class="display"></router-view>
  </div>
</template>

import axios from 'axios'

<script>
export default {
  name: 'ManagerPanel',
}
</script>

<style scoped>
.title {
    margin: auto;
}

.root {
    margin: auto auto;
    width: 80%;
    height: 60vh;
    display: flex;
}

.menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: auto;
}

a {
    display: flex;
    height: 40px;
    justify-content: center;
    align-items: center;
    color: #cba7a7;
}

.router-link-active {
    background: #839383;
    text-align: center;
}

.display {
    flex: 1;
}
</style>
