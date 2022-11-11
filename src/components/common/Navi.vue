<template>
  <div>
    <div class="header">
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/book">도서목록</router-link>
        <router-link to="/about">About</router-link>
        <!-- <a href="/">Home </a> -->
      </div>

      <router-link to="/">
        <img src="@/assets/ssafy_logo.png" class="ssafy_logo" alt="싸피 로고" />
        <p class="logo">도서관리</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NaviView",
};
</script>

<style></style>
