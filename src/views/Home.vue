<template>
  <Layout :isSearch = isSearch>
    <div class="home">
      <div class="content">
        <div class="left">
          <div class="head demo-image__preview">
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
          </div>
          <h1 class="title">我想把我的事业奉献给前端工程</h1>
          <div class="describe">
            <p>
              在这之前我一直都在从事设计这个行业(UI设计)，在UI的工作中与代码息息相关，但并没有深入，设计网页+公众号+小程序+App，使用Bootstrap写出静态页面，后面逐渐接触到Vue。因为热爱，所以决定转入前端，买了Vue的学习课程，也跟着公司项目参与到其中（所有的项目大改版(全使用Vue)：网站+公众号+小程序+公司CRM）
            </p>
            <p>1、网站大部分是本人做的（业务逻辑并不复杂）；</p>
            <p>
              2、CRM主要是参与了后面的维护：添加功能，修改页面等，基本可以独立维护公司系统。
            </p>
          </div>
          <div class="resume-btn">
            <router-link to="/resume" class="mybtn">我的简历</router-link>
          </div>
        </div>
        <div class="right">
          <div class="right-box">
            <div class="o1"></div>
            <div class="o2"></div>
            <div class="o3"></div>
          </div>
        </div>
      </div>
      <div class="article-item" style="overflow:auto;">
        <ul
          class="list"
          v-infinite-scroll="load"
          infinite-scroll-disabled="disabled">
          <li v-for="i in count" :key="i">
            <div class="top text">
              <h2 class="ellipsis-2">什么是Vuex，它和单纯的全局对象有以下两点不同</h2>
              <div class="describe ellipsis-2">什么是Vuex？Vuex 是一个专为 Vue.js 应用程序开发的状态管理器，采用集中式存储管理应用，用基础组件的时候更像是使用原始的 HTML 元素，而不会担心哪个元素是</div>
            </div>
            <div class="bottom">
              <router-link to="#" class="look-btn">查看详情</router-link>
            </div>
          </li>
          <li>
            <div class="top article-image">
              <div class="main-image">
                <img src="https://image.haobangni.com/upfiles/employee/files/2020-03/725b0e5051584ed186d463d6482ef854.png" />
              </div>
            </div>
            <div class="bottom">
              <h2 class="ellipsis-1">Linux中mkdir和选项不会影响 style 和 class 的绑定</h2>
            </div>
          </li>
        </ul>
        <p v-if="loading"><i class="iconfont iconloading"></i>···</p>
        <p v-if="noMore">没有更多了</p>
      </div>
    </div>
  </Layout>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components:{},
})
export default class Home extends Vue {
  isSearch = this.$route.meta.isSearch;
  url = ['../../img/icons/myHead.jpg'];
  count=9;
  loading= false;
  get noMore(){
    return this.count >= 20
  }
  get disabled(){
    return this.loading || this.noMore
  }
  load () {
    this.loading = true
    setTimeout(() => {
      this.count += 2
      this.loading = false
    }, 2000)
  }
}
</script>
<style lang="scss">
.article-item{
  p{
    text-align: center;
    padding: 20px 0;
  }
}
</style>
<style lang="scss" scoped>
$borderRadius: 4px;
$lineHeight:60px;
$positionTop: 140;
$gridGap: 30px;
$lookBtn: 44px;
$bottomHeight:44px;
$textPadding:20px;
.home {
  margin-top: 80px;
  >.content{
    display: flex;
    >.left{
      flex: 1;
      padding-right: 50px;
      >.title{
        margin-top: 10px;
        font-size: 40px;
      }
      >.describe{
        margin-top: 10px;
        line-height: 24px;
      }
      >.resume-btn{
        margin-top: 30px;
        .mybtn {
          display: inline-block;
          min-height: $lineHeight;
          line-height: $lineHeight;
          font-size: 24px;
          padding: 0 30px;
          background: #47CF74;
          color:#121417;
          border-radius: $borderRadius;
          font-weight:700;
        }
      }
    }
    >.right{
      width: 440px;
      > .right-box{
        width: 100%;
        height: 408px;
        background: linear-gradient(90deg,#252830,#181B1F);
        border-radius: $borderRadius;
        position: relative;
        >.o1,.o2,.o3{
          position: absolute;
          width: 296px;
          height: $positionTop + px;
          background: #1A1A1A;
          border-radius: $borderRadius;
        }
        > .o1 {
          top: -(18+(0 * $positionTop))+ px;
          right: -20px;
        }
        > .o2 {
          top: ($positionTop - 7)+px;
          right: 100px;
        }
        > .o3 {
          top: ($positionTop * 2 + 5)+px;
          right: 0px;
        }
      }
    }
    .headBorder {
      border: 4px solid white;
      border-radius: 50%;
    }
  }
  >.article-item{
    margin-top: 100px;
    > ul {
      display: grid;
      grid-row-gap: $gridGap;
      grid-column-gap: $gridGap;
      grid-template-columns: 1fr 1fr 1fr;
      >li {
        background: #2C303A;
        border-radius: $borderRadius;
        display: grid;
        grid-template-rows: 1fr $bottomHeight;
        cursor: pointer;
        .text>.describe{
          margin-top: 10px;
        }
        .top.text{
          padding: $textPadding;
        }
        .top.article-image {
          >.main-image{
            width: 100%;
            height: 150px;
            overflow: hidden;
            border-radius: $borderRadius;
            position: relative;
            display: inline-block;
            >img{
              object-fit: cover;
              border-radius: inherit;
              display: block;width: 100%;
              height: 100%;
            }
          }
        }
        .bottom{
          padding: 0 $textPadding;
          line-height: $bottomHeight;
          text-align: right;
          >.look-btn{
            display: inline-block;
            min-height: $lookBtn;
            line-height: $lookBtn;
            font-weight: bold;
            border-radius: $borderRadius;
            color: #a4d7e9;
          }
          > h2{
            text-align: left;
            font-size: 18px;
          }
        }
      }
      >li:hover{
        opacity: .8;
        box-shadow: 0 0 10px #000;
        animation: liMove 1s ease-in-out;
      }
    }
  }
}
@keyframes liMove {
  0%{ transform: translateY(-10px);}
  25%{transform: translateY(10px);}
  50%{transform: translateY(0px);}
}
</style>
