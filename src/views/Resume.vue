<template>
  <Layout>
    <div class="resume-box">
      <div class="resume">
        <div class="status">
          <div class="time">13:14</div>
          <div class="bangs"></div>
          <div class="signal"><i class="iconfont icondianliang"></i></div>
        </div>
        <div class="title">
          <h1>Hey，你好！</h1>
          <p>
            很神奇吧，冥冥之中有一种力量让您看见我的简历。特别感谢您来到这里！
          </p>
        </div>
        <div class="base-info">
          <div class="head flex-start">
            <el-image
              class="headBorder"
              style="width: 100px; height: 100px;"
              :src="url[0]"
              fit="cover"
              :preview-src-list="url"
            >
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
            </el-image>
            <h1>陆杨清</h1>
          </div>
          <div class="info1 flex-start">
            <p v-for="(item,index) in baseInfo" :key="index">
              <i class="iconfont" :class="item.iconName"></i><span>{{item.name}}</span>
            </p>
          </div>
          <BaseInfo :baseInfo2="baseInfo2"></BaseInfo>
        </div>
        <div class="job-wanted">
          <div class="left">
            <p class="title">求职期望</p>
            <div class="content">
              <span>Vue前端开发工程师</span>
              <span>行业不限</span>
            </div>
          </div>
          <div class="right">
            <p>7-8K</p>
          </div>
        </div>
        <div class="skill-introduce">
          <p>1、熟悉iOS和Android的界面设计规范；</p>
          <p>2、熟悉PS, AI, Axure, VScode, XMind等软件；</p>
          <p>3、熟练BootStrap前端开发，熟悉Vue框架；</p>
          <p>4、熟悉 <span>HTML, CSS, JS, Vue，Promise, Axios</span> 等；</p>
          <p>5、项目经验：好邦伲公司微信公众号、官网、CRM后台、保姆/月嫂网站、保姆查询系统。参与更多项目等等等等。</p>
        </div>
        <div class="work-experience">工作经验</div>
        <div class="skill-and-like">技能掌握 和 兴趣爱好</div>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseInfo from '../components/BaseInfo.vue';
@Component({
  components:{BaseInfo}
})
export default class Resume extends Vue {
  url = ['../../img/icons/myHead.jpg'];
  baseInfo=[
    {name:"前端1年经验", iconName:"iconexperience"},
    {name:"大专", iconName:"iconeducation"},
    {name:"30岁", iconName:"iconbirthday"}
  ];
  baseInfo2 = [
    {placement: "bottom-start", title:"Tel", content: "18671867438", iconName:"iconphone"},
    {placement: "bottom", title:"Mail", content: "1006676722@qq.com", iconName:"iconmailbox"},
    {placement: "bottom", title:"Address", content: "湖北恩施", iconName:"iconaddress"},
    {placement: "bottom-end", title:"School", content: "湖北民族学院科技学院", iconName:"iconschool"}
  ]
}
</script>
<style lang="scss" scoped>
$boxRadius:60px;
$lineHeight:96px;
$infoRadius:30px;
$infoPadding: 40px;
$fontSize24: 24px;
$fontSize30: 30px;
$fontSize36: 36px;
.resume-box {
  margin-top: 240px;
  padding: 26px;
  border-radius: $boxRadius;
  background: #121417;
  border: 2px solid rgb(73, 73, 73);
}
.resume {
  background-color: #1f2026;
  padding: 0 40px 40px;
  border-radius: $boxRadius;
  > .status {
    height: $lineHeight;
    overflow: hidden;
    display: flex;
    > .time {
      width: 200px;
      font-size: $fontSize36;
      font-weight: bold;
      text-align: center;
    }
    .time,
    .signal {
      line-height: $lineHeight;
    }
    > .bangs {
      flex: 1;
      background: #121417;
      border-radius: 0 0 50px 50px;
    }
    > .signal {
      width: 200px;
      text-align: right;
      i {
        font-size: $fontSize30;
      }
    }
  }
  > .title {
    margin-top: 90px;
    h1 {
      font-size: $fontSize36;
    }
    p {
      width: 470px;
      font-size: 20px;
      margin-top: 10px;
    }
  }
  .base-info{
    margin-top: 130px;
    background: #2C2E37;
    border-radius: $infoRadius;
    padding: $infoPadding;
    .head{
      .headBorder {
        border: 4px solid white;
        border-radius: 50%;
      }
      >h1{
        display: inline-block;
        margin-left: 20px;
        font-size: 44px;
      }
    }
    .info1{
      margin-top: 30px;
      p{
        margin-right: 60px;
        span{
          padding-left: 10px;
        }
      }
      p,p i{
        font-size: 28px;
        font-weight: bold;
      }
    }
  }
  .job-wanted{
    font-weight: bold;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    >.left{
      padding: 10px 0;
    }
    >.left>.title{
      font-size: $fontSize24;
    }
    >.left>.content{
      margin-top: 10px;
      span{
        font-size: $fontSize30;
        margin-right: 30px;
      }
    }
    .right{
      p{
        width: 200px;
        background: #FBDD40;
        font-size: $fontSize36;
        color: #121417;
        text-align: center;
        border-radius: $infoRadius;
        padding: 28px 0;
      }
    }
  }
  .skill-introduce{
    margin-top: 50px;
    background: #00369D;
    padding: $infoPadding;
    border-radius: $infoRadius;
    p{
      font-size: $fontSize24;
      line-height: 36px;
      color: #ddd;
      span{
        color: #FBDD40;
        font-weight: bold;
      }
    }
    p:not(:last-child){
      margin-bottom: 20px;
    }
  }
}
</style>