<template>
  <Layout>
    <el-button type="primary" @click="fun">主要按钮</el-button>
  </Layout>
</template>
<script>
import { fjuserApi } from '../api/api'
export default {
  name: "About",
  methods:{
    fun () {
      fjuserApi.get("info",{}).then( res=>{
        console.log(res)
      })
    }
  },
}
</script>
<style lang="scss" scoped>
</style>
