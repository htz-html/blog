<template>
  <div class="not-fount">
    <h1>当前页面不存在，请检查网址是否正确</h1>
    <p>
      <router-link class="back_btn" to="/">返回 </router-link>
    </p>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.not-fount{
  width: 1000px;
  margin: 0 auto;
  margin-top: 15%;
  text-align: center;
  h1{
    font-size: 30px;
  }
  p{
    .back_btn{
      display: inline-block;
    }
  }
}
</style>