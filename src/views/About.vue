import { function } from '../api/api';
<template>
  <Layout>
    <el-button type="primary" @click="fun">主要按钮</el-button>
  </Layout>
</template>
<script>
import { fjuserApi } from '../api/api'
export default {
  props:["isSearh"],
  name: "About",
  methods:{
    fun () {
      fjuserApi.get("info",{}).then( res=>{
        console.log(res)
      })
    }
  },
  created() {
    console.log("11111",this.isSearh)

  }
}
</script>
<style lang="scss" scoped>
</style>
