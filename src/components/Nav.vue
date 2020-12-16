<template>
  <div id="Nav">
    <h1 class="logo">
      <img src="../assets/image/logo@2x.png">
    </h1>
    <router-link to="/">
      <i class="iconfont iconhome"></i>
    </router-link>
    <router-link to="/resume">
      <i class="iconfont iconresume"></i>
    </router-link>
    <router-link to="/article">
      <i class="iconfont iconarticleList"></i>
    </router-link> 
    <router-link to="/about">
      <i class="iconfont iconinfo"></i>
    </router-link>
  </div>
</template>
<script lang="ts">
export default {  
}
</script>
<style lang="scss" scoped>
#Nav{
  width: 100px;
  background: #1F2026;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  a{
    display: block;
    margin: 30px 0;
    i{
      font-size: 44px;
    }
  }
  .logo{
    margin-top: 30px;
    margin-bottom: 140px;
    img{
      width: 69px;
      height: 69px; 
    }
  }
}
</style>