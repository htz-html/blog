<template>
  <div id="Nav">
    <h1 class="logo">
      <img src="../assets/image/logo@2x.png">
    </h1>
    <router-link to="/" class="item" active-class="selected" exact>
      <i class="iconfont iconhome"></i>
    </router-link>
    <router-link to="/resume" class="item" active-class="selected" >
      <i class="iconfont iconresume"></i>
    </router-link>
    <router-link to="/article" class="item" active-class="selected" >
      <i class="iconfont iconarticleList"></i>
    </router-link> 
    <router-link to="/about" class="item" active-class="selected" >
      <i class="iconfont iconinfo"></i>
    </router-link>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Nav extends Vue {  
}
</script>

<style lang="scss" scoped>
$thirty:30px;
#Nav{
  width: 100px;
  background: #1F2026;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  > .item{
    display: block;
    margin: $thirty 0;
    i{
      font-size: 44px;
    }
  }
  > .item.selected{
    color: #FBDD40;
  }
  > .logo{
    margin-top: 30px;
    margin-bottom: 140px;
    img{
      width: 70px;
      height: 70px; 
    }
  }
}
</style>