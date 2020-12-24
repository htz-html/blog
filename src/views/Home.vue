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
      <div class="list">
        <div class="item" v-for="item in listData" :key="item.id">
          <div class="sign">
            <i class="iconfont"></i>
          </div>
          <h2 class="title ellipsis-1">{{item.title}}</h2>
          <div class="describe ellipsis-3">{{item.describe}}</div>
          <div class="btn">
            <router-link class="toBtn" to="">查看详情</router-link>
          </div>
        </div>
      </div>
      <div class="design">
        <div class="explain">
          <h2 class="title">其实我以前是一个UI设计师</h2>
          <p>我很享受设计中的色彩，勾勒出喜欢的形状，如果你要问我为什么想去做前端？</p>
          <p>是挑战，是乐趣，富满激情的一种突破。设计是形，而代码就是实，把形转换为实。</p>
          <div class="design-btn">
            <router-link class="design-btn-link" to=''>站酷个人主页</router-link>
          </div>
        </div>
        <div style="width:100px">
          <button @click="btnYiD">动画</button>
        </div>
        <transition name="fade">
          <div class="opus-items" :class="{xxx:show}">
            <div class="img">
              <img src=""/>
            </div>
            <h2 class="title ellipsis-1">对象字面量表示法与 JSON</h2>
            <p class="time">2020年10月26日</p>
          </div>
        </transition>
        
      </div>
    </div>
  </Layout>
</template>
<script lang="ts">
import router from "@/router";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components:{},
})
export default class Home extends Vue {
  isSearch = this.$route.meta.isSearch;
  url = ['../../img/icons/myHead.jpg'];
  listData = [
    {
      id:1,
      title:'对象字面量表示法与 JSON',
      artUrl:'https://www.yinxiang.com/everhub/note/2586e53f-a66b-4d27-87d6-91330606f89d',
      describe:'对象字面量表示法和 JavaScript Object Notation（JSON）是不同的。虽然他们看起来相似，不同点有： JSON 只允许"property": value syntax形式的属性',
    },
    {
      id:2,
      title:'for...of循环和for...in循环之间的区别',
      artUrl:'https://www.yinxiang.com/everhub/note/841fcf55-85df-476d-a85c-8dd111574c3e',
      describe:'for of let iterable = [3, 5, 7]; iterable.foo = "hello"; for (let i of iterable) { console.log(i)'
    },
    {
      id:3,
      title:'yield 是什么，干嘛用的',
      artUrl:'https://www.yinxiang.com/everhub/note/2f5b673a-7957-4f33-a643-64a6c353a1d6',
      describe:'yield 是什么？ yield 是 es6 新的关键字，使生成器函数执行暂停。yield 后面的表达式的值返回给生成器的调用者。它可以被认为是一个基于生成器的版本的 return 关键字。 yiel'
    }
  ];
  show= false;
  btnYiD(){
    this.show=true
  }
}
</script>
<style lang="scss" scoped>
$borderRadius: 4px;
$borderRadius10: 10px;
$lineHeight:60px;
$positionTop: 140;
$gridGap: 30px;
$lookBtn: 44px;
$bottomHeight:44px;
$textPadding:20px;
$listBackground:#252830;
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
  >.list{
    margin-top: 120px;
    display: flex;
    justify-content:space-between;
    >.item{
      width: 340px;
      background: $listBackground;
      border-radius: $borderRadius10;
      padding: 20px;
      box-sizing: border-box;
      >.sign{
        width: 78px;
        height: 78px;
        background: #1F2026;
        border-radius: $borderRadius10;
        margin-top: -60px;
      } 
      >.title{
        margin-top: 20px;
        font-size: 28px;
      }
      >.describe{
        margin-top: 15px;
        line-height: 24px;
        height: 72px;
      }
      >.btn{
        margin-top: 15px;
        >.toBtn{
          background: #444857;
          padding: 0 26px;
          display: inline-block;
          line-height: 48px;
          font-size: 16px;
          border-radius: $borderRadius;
        }
      }
    }
  }
  >.design{
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    >.explain{
      width: 340px;
      border-radius: $borderRadius10;
    }
    >.explain{
        padding-right: 30px;
        box-sizing: border-box;
      >.title{
        font-size: 28px;
      }
      p{
        margin-top: 15px;
      }
      .design-btn{
        margin-top: 20px;
        .design-btn-link{
          display: inline-block;
          border: 2px solid #FBDD40;
          color: #FBDD40;
          font-size: 18px;
          font-weight: bold;
          line-height: 58px;
          padding: 0 28px;
          border-radius: $borderRadius;
        }
      }
    }
    >.opus-items{
      position: relative;
      width: 340px;
      cursor: pointer;
      >.img{
        height: 186px;
        background: burlywood;
        border-radius: $borderRadius10;
      }
      >.title{
        font-size: 18px;
        font-weight: bold;
        margin-top: 18px;
      }
      >.time{
        margin-top: 10px;
        color: #6B6F7E;
      }
    }
    >.opus-items::after{
      content: '';
      position: absolute;
      background: $listBackground;
      right: -20px;
      top: 20px;
      left: 20px;
      z-index: -1;
      bottom: 0;
      border-radius: $borderRadius10;
    }
    >.opus-items:hover::after{
      bottom: 0;
      top: -20px;
      left: -20px;
      transition: all .5s ;
    }
  }
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.xxx{}
@keyframes liMove {
  0%{ transform: translateY(-10px);}
  25%{transform: translateY(10px);}
  50%{transform: translateY(0px);}
}
</style>
