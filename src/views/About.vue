<template>
  <Layout>
    <div class="about">
      <h2 class="title" @click="fun">网站使用Vue说明</h2>
      <div class="web">
        <p>1、记录自己遇到的难点、重点；说起<span>JavaScript</span>，大家都知道是一门脚本语言。那么ES是什么鬼呢？ES全称ECMAScript ，是JavaScript语言的国际标准。</p>
        <p>2、记录自己遇到的难点、重点；</p>
        <p>3、记录自己遇到的难点、重点；</p>
        <p>4、记录自己遇到的难点、重点；</p>
      </div>
      <h2 class="title" @click="fun">我的博客简介</h2>
      <div class="web">
        <p>1、记录自己遇到的难点、重点；说起JavaScript，大家都知道是一门脚本语言。那么ES是什么鬼呢？ES全称ECMAScript ，是JavaScript语言的国际标准。</p>
        <p>2、记录自己遇到的难点、重点；</p>
        <p>3、记录自己遇到的难点、重点；</p>
        <p>4、记录自己遇到的难点、重点；</p>
      </div>
    </div>
  </Layout>
</template>
<script>
import { fjuserApi } from '../api/api'
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "About"
})
export default class About extends Vue {
  fun() {
    fjuserApi.get("Catalog",{}).then( res=>{
      console.log(res)
    })
  }
}
</script>
<style lang="scss" scoped>
.about{
  padding-top: 150px;
  >.title{
    font-size: 36px;
    margin-top: 50px;
  }
  >.web{
    margin-top: 20px;
    background: #252830;
    padding: 20px 30px;
    border-radius: 4px;
    >p{
      color: #eee;
      font-size: 16px;
      line-height: 30px;
      margin: 15px 0;
      span{
        color: #FBDD40;
        font-size: 18px;
        font-weight: bold;
        padding: 0 10px;
      }
    }
  }
}
</style>
