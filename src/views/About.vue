import { function } from '../api/api';
<template>
  <Layout>
    <el-button type="primary" @click="fun">主要按钮</el-button>
  </Layout>
</template>

<script>
export default {
  name: "About",
  methods:{
    fun () {
      this.$get('https://api.haobangni.com/sites/sys/banner/position',{}).then((res)=>{
        console.log(res)
      })
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
