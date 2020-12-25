<template>
  <Layout>
    <div class="boxx" v-for="(item,index) in items" 
    :key="index" :class="{funo}" 
    @mouseover="funOver" @mouseleave="funLeave">{{item.title}}</div>
  </Layout>
</template>
<script>
import { fjuserApi } from '../api/api'
export default {
  name: "About",
  data(){
    return{
      funo: false,
      funl: false,
      items:[
        {title:"我是按钮A"},
        {title:"我是按钮B"}
      ]
    }
  },
  methods:{
    fun () {
      // fjuserApi.get("info",{}).then( res=>{
      //   console.log(res)
      // })
    },
    funOver(){
      this.funo = true;
    },
    funLeave(){
      this.funo = false;
    }
  }
}
</script>
<style lang="scss" scoped>
.boxx{
  width: 100px;
  height: 100px;
  background: burlywood;
  position: relative;
}
.boxx::after{
  transition: all 1s;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: red;
  z-index: -1;
}
.funo:hover::after{
  bottom: -20px;
  right: -20px;
}
</style>
