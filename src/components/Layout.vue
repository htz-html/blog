<template>
  <div class="wrapper">
    <div class="content">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
export default {
  name: "Layout"
}
</script>
<style lang="scss" scoped>
.wrapper{
  .content{
    padding-left: 100px;
  }
}
</style>