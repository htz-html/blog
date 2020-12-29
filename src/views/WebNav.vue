<template>
  <Layout>
    <div class="webnav">
      <div class="list">
        <div class="title">关于设计</div>
        <ul>
          <li>
            <img src="../assets/image/dribbble.png">
            <p>启发设计灵感</p>
          </li>
          <li>
            <img src="../assets/image/huaban.png">
            <p>启发设计灵感</p>
          </li>
          <li>
            <img src="../assets/image/zhanku.png">
            <p>启发设计灵感</p>
          </li>
          <li>
            <img src="../assets/image/shijue.png">
            <p>启发设计灵感</p>
          </li>
          <li>
            <img src="../assets/image/alibaba.png">
            <p>启发设计灵感</p>
          </li>
          <li>
            <img src="../assets/image/qiantu.png">
            <p>免费下载日本流行的照片</p>
          </li>
          <li>
            <img src="../assets/image/shetu.png">
            <p>启发设计灵感</p>
          </li>
        </ul>
      </div>
      <div class="list">
        <div class="title">关于设计</div>
        <ul>
          <li>
            <img src="../assets/image/dribbble.png">
            <p>启发设计灵感</p>
          </li>
          <li>
            <img src="../assets/image/huaban.png">
            <p>启发设计灵感</p>
          </li>
          <li>
            <img src="../assets/image/zhanku.png">
            <p>启发设计灵感</p>
          </li>
          <li>
            <img src="../assets/image/shijue.png">
            <p>启发设计灵感</p>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";
@Component({
  name:"WebNav",
  components:{},
})
export default class ArticleDetail extends Vue {
  
}
</script>
<style lang="scss" scoped>
$borderradius4:4px;
$borderradius10:10px;
.webnav{
  padding-top: 160px;
  padding-bottom: 50px; 
  >.list{
    margin-top: 50px;
    >.title{
      font-size: 24px;
      color: #121417;
      background: #47CF74;
      font-weight: bold;
      padding-left: 20px;
      line-height: 48px;
      border-radius: $borderradius4;
      width: 200px;
    }
    >ul{
      display: flex;
      flex-wrap: wrap;
      margin-top: 20px;
      margin-left: -10px;
      margin-right: -10px;
      >li{
        width: 260px;
        padding: 20px;
        margin: 10px;
        background: #1F2026;
        box-sizing: border-box;
        border-radius: $borderradius4;
        >img{
          height: 32px;
        }
        >p{
          margin-top: 10px;
        }
      }
    }
  }
}
</style>