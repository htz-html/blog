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
        <div class="opus-items" 
          v-for="(item,index) in opusData" 
          :key="index"
          :class="{itemhover}"
          @mouseover="itemOver"
          @mouseleave="itemLeave"
          >
          <div class="img">
            <img :src="item.imgUrl"/>
          </div>
          <h2 class="title ellipsis-1">{{item.title}}</h2>
          <p class="time">{{item.time}}</p>
        </div>
      </div>
      <div class="project">
        <div class="project-content">
          <h2 class="title">参与的企业项目</h2>
          <p style="color:#76DAFF;text-align: center;margin-top:10px">有公司的项目，也有自己的练习作品</p>
          <div class="project-items">
          <el-tabs v-model="currentName" >
            <el-tab-pane label="公司CRM" name="first">
              <div class="item-detail">
                <div class="left">
                  <div>
                    <p>1.2020 秋季书单：用阅读</p>
                    <p>2.2020 秋季书单：用阅读</p>
                    <p>3.2020 秋季书单：用阅读</p>
                    <p>4.2020 秋季书单：用阅读</p>
                  </div>
                  <div class="tags">
                    <span>web</span>
                    <span>一年前</span>
                    <span>Vue</span>
                  </div>
                  <button></button>
                </div>
                <div class="right">
                  <img src="../assets/image/hbn_ls.png" alt="">
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="保姆大本营-公众号" name="second">
            </el-tab-pane>
            <el-tab-pane label="保姆大本营-PC" name="third">
            </el-tab-pane>
            <el-tab-pane label="好邦伲家政-公众号" name="fourth">
            </el-tab-pane>
            <el-tab-pane label="好邦伲家政-PC" name="fifth">
            </el-tab-pane>
          </el-tabs>
        </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<script lang="ts">
// import router from "@/router";
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
  opusData=[
    {
      title:'对象字面量表示',
      time:'2019年05月23日',
      imgUrl:'https://img.zcool.cn/community/01d7975da168c3a80121b722504733.jpg@260w_195h_1c_1e_1o_100sh.jpg'
    },
    {
      title:'对象字面量表示',
      time:'2018年03月15日',
      imgUrl:'https://img.zcool.cn/community/01ffec5c1a1116a80121df905f58cc.jpg@260w_195h_1c_1e_1o_100sh.jpg'
    }
  ]
  itemhover= false;
  currentName="first";
  itemOver(){
    this.itemhover = true;
  }
  itemLeave(){
    this.itemhover = false;
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
$designHover:15px;
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
    padding-top: 100px;
    display: flex;
    justify-content: space-between;
    background: url(../assets/image/Layer2.png) no-repeat;
    background-position: top -10px left 0px;
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
        overflow: hidden;
        img{
          width: 100%;
        }
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
    .opus-items::after{
      transition: all 0.5s ;
      content: '';
      position: absolute;
      background: $listBackground;
      right: -$designHover;
      top: $designHover;
      left: $designHover;
      z-index: -1;
      bottom: 0;
      border-radius: $borderRadius10;
    }
    .itemhover:hover::after{
      top: -$designHover;
      left: -$designHover;
    }
  }
  .project{
    margin-top: 100px;
    .project-content{
      position: relative;
      .title{
        padding-top: 40px;
        font-size:36px;
        text-align: center;
      }
      .project-items{
        margin-top: 30px;
        .item-detail{
          display: flex;
          .left{
            width: 520px;
            padding-left: 40px;
          }
          .right{
            flex: 1;
            padding-top: 40px;
            img{
              width: 100%;
              border-radius: $borderRadius10;
            }
          }
        }
      }
    }
    .project-content::after{
      content:'';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: -100px;
      background-color: #1F2026;
      z-index: -1;
      border-radius: $borderRadius10;
    }
  }
}
@keyframes liMove {
  0%{ transform: translateY(-10px);}
  25%{transform: translateY(10px);}
  50%{transform: translateY(0px);}
}
</style>
<style lang="scss">
.project-items{
  .el-tabs__nav-wrap::after{
    width: 0;
  }
  .el-tabs__nav{
    margin: 0 auto;
    .el-tabs__item{
      height: 30px;
      line-height: 30px;
      text-align: center;
      z-index: 1;
      color: #aaa;
    }
  }
  .el-tabs__active-bar{
    height: 30px;
    padding: 0 10px;
    border-radius: 50px;
    left: -11px;
    background-color: #47CF74;
  }
  .is-active{
    color: #fff !important;
  }
  .el-tabs__nav-wrap{
    text-align: center;
  }
  .el-tabs__nav-scroll{
    display: inline-block;
    overflow: initial;
  }
}
</style>