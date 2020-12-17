<template>
  <Layout>
    <div class="home">
      <div class="content">
        <div class="left">
          <div class="head">
            <el-avatar
              class="headBorder"
              :size="100"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar>
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
      <div class="article-item">
        <el-card shadow="hover" class="text-card">
          <div class="top text">
            <h2 class="ellipsis-2">什么是Vuex，它和单纯的全局对象有以下两点不同</h2>
            <div class="describe ellipsis-2">什么是Vuex？Vuex 是一个专为 Vue.js 应用程序开发的状态管理器，采用集中式存储管理应用，用基础组件的时候更像是使用原始的 HTML 元素，而不会担心哪个元素是</div>
          </div>
          <div class="bottom">
            <router-link to="#" class="look-btn">查看详情</router-link>
          </div>
        </el-card>
        <el-card class="text-card" :body-style="{ padding: '0px' }">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div class="bottom clearfix">
            <h2 class="ellipsis-1">什么是Vuex，它和单纯的全局对象有以下两点不同</h2>
          </div>
        </el-card>
        <el-card shadow="hover" class="text-card">
          <div class="top text">
            <h2 class="ellipsis-2">什么是Vuex，它和单纯的全局对象有以下两点不同</h2>
            <div class="describe ellipsis-2">什么是Vuex？Vuex 是一个专为 Vue.js 应用程序开发的状态管理器，采用集中式存储管理应用，用基础组件的时候更像是使用原始的 HTML 元素，而不会担心哪个元素是</div>
          </div>
          <div class="bottom">
            <router-link to="#" class="look-btn">查看详情</router-link>
          </div>
        </el-card>
        <el-card class="text-card" :body-style="{ padding: '0px' }">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div class="bottom clearfix">
            <h2 class="ellipsis-1">什么是Vuex，它和单纯的全局对象有以下两点不同</h2>
          </div>
        </el-card>
        <el-card class="text-card" :body-style="{ padding: '0px' }">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div class="bottom clearfix">
            <h2 class="ellipsis-1">什么是Vuex，它和单纯的全局对象有以下两点不同</h2>
          </div>
        </el-card>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Home extends Vue {}
</script>
<style lang="scss">
.article-item .el-card__body{
  display: grid;
  grid-template-rows: 150px 66px;
  padding: 0;
}
.image {
    width: 100%;
    display: block;
  }
</style>
<style lang="scss" scoped>
$borderRadius: 4px;
$lineHeight:60px;
$positionTop: 140;
$gridGap: 30px;
$lookBtn: 44px;
$bottomHeight:66px;
.home {
  margin-top: 80px;
  >.content{
    display: flex;
    >.left{
      flex: 1;
      padding-right: 50px;
      >.title{
        margin-top: 5px;
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
    }
  }
  >.article-item{
    margin-top: 100px;
    display: grid;
    grid-row-gap: $gridGap;
    grid-column-gap: $gridGap;
    grid-template-columns: 1fr 1fr 1fr;
    .text-card{
      color: white;
      background: #2C303A;
      border: none;
      .top{
        padding: 20px;
        > .describe{
          margin-top: 10px;
        }
      }
      .top.text{
        padding: 20px;
      }
      .bottom{
        padding: 0 20px;
        line-height: $bottomHeight;
        background: #2C303A;
        >.look-btn{
          display: inline-block;
          padding: 0 20px;
          min-height: $lookBtn;
          line-height: $lookBtn;
          font-size: 16px;
          font-weight: bold;
          background: #444857;
          border-radius: $borderRadius;
        }
      }
    }
    
  }
}
</style>
