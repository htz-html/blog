<template>
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
export default {
    
}
</script>
<style lang="scss" scoped>
.wrapper{
  .content{
    padding-left: 100px;
  }
}
</style>