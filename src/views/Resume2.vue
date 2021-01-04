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
          <h1 class="flex-start">Hey，你好！<router-link to='/resume' class="abtn">普通版</router-link></h1>
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
            <div class="my-info">
              <h2>陆杨清</h2>
              <div class="info1 flex-start">
                <p v-for="(item,index) in baseInfo" :key="index">
                  <i class="iconfont" :class="item.iconName"></i><span>{{item.name}}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="skill-introduce">
          <h2>技能掌握</h2>
          <div class="content">
            <p>1、熟悉iOS和Android的界面设计规范；</p>
            <p>2、熟悉PS, AI, Axure, VScode, XMind等软件；</p>
            <p>3、熟练BootStrap前端开发，熟悉Vue框架；</p>
            <p>4、熟悉 <span>HTML, CSS, JS, Vue，Promise, Axios</span> 等；</p>
            <p>5、项目经验：好邦伲公司微信公众号、官网、CRM后台、保姆/月嫂网站、保姆查询系统。参与更多项目等等等等。</p>
          </div>
        </div>
        <div class="work-experience">
          <h2>工作经验</h2>
          <div class="content" v-for="(item,index) in works" :key="index+Math.random()">
            <div class="time">{{item.time}}</div>
            <div class="name">
              <span>{{item.title}}</span>
              <span>{{item.worktype}}</span>
            </div>
            <div class="info">
              <p v-if="item.p1">1、{{item.p1}}</p>
              <p v-if="item.p2">2、{{item.p2}}</p>
              <p v-if="item.p3">3、{{item.p3}}</p>
              <p v-if="item.p4">4、{{item.p4}}</p>
              <p v-if="item.p5">5、{{item.p5}}</p>
            </div>
          </div>
        </div>
        <div class="skill-and-like">
          <el-tabs v-model="currentName" >
            <el-tab-pane label="技能掌握" name="first">
              <ul class="tabs">
                <li>
                  <div class="tab-bg ">
                    <img src="https://cn.vuejs.org/images/logo.png">
                  </div>
                  <p>Vue.js</p>
                </li>
                <li>
                  <div class="tab-bg ">
                    <div class="text">H/C</div>
                  </div>
                  <p>HTML/CSS</p>
                </li>
                <li>
                  <div class="tab-bg">
                    <div class="text">JS</div>
                  </div>
                  <p>JavaScript</p>
                </li>
              </ul>
              <ul class="tabs">
                <li>
                  <div class="tab-bg bg">
                    <div class="design ps">Ps</div>
                  </div>
                  <p>Photoshop</p>
                </li>
                <li>
                  <div class="tab-bg bg">
                    <div class="design ai">Ai</div>
                  </div>
                  <p>Illustrator</p>
                </li>
                <li>
                  <div class="tab-bg bg">
                    <div class="design xd">Xd</div>
                  </div>
                  <p>Adobe XD</p>
                </li>
                <li>
                  <div class="tab-bg bg">
                    <img src="../assets/image/sketch.png">
                  </div>
                  <p>Sketch</p>
                </li>
                <li>
                  <div class="tab-bg bg">
                    <img src="../assets/image/figma.png">
                  </div>
                  <p>Figma</p>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="兴趣爱好" name="second">
              <div class="like">
                <span style="left:100px;top:50px;padding: 6px 14px;font-size:16px">看新闻</span>
                <span style="left:50px;top:180px;padding: 8px 20px;font-size:24px">逛知乎</span>
                <span style="left:290px;top:150px;padding: 6px 20px;font-size:24px">篮球</span>
                <span style="left:600px;top:200px;padding: 4px 10px;font-size:30px">你好</span>
                <span style="left:230px;top:10px;padding: 3px 10px;font-size:18px">你好</span>
                <span style="left:520px;top:100px;padding: 4px 22px;font-size:14px">你好</span>
                <span style="left:250px;top:300px;padding: 7px 10px;font-size:14px">你好</span>
                <span style="left:800px;top:500px;padding: 5px 15px;font-size:30px">你好</span>
                <span style="left:700px;top:360px;padding: 4px 18px;font-size:18px">你好</span>
                <span style="left:700px;top:50px;padding: 10px 15px;font-size:18px">你好</span>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="thanks">
          <el-divider>感谢您看到底</el-divider>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components:{}
})
export default class Resume extends Vue {
  url = [require('../assets/image/myHead.jpg')];
  baseInfo=[
    {name:"大专-计算机应用", iconName:"iconexperience"},
    {name:"湖北恩施", iconName:"iconeducation"},
    {name:"18671867439", iconName:"iconbirthday"},
    {name:"1006676722@qq.com", iconName:"iconbirthday"}
  ];
  activeName=["1"];
  skillLike="first";
  works=[
    {title:"厦门好邦伲家政服务有限公司",worktype:"前端工程师", time:"2017.04 - 2021.01",p1:"设计网页+公众号+小程序+App；",  p2:"第二点" ,p3:"第三点",p4:"第四点"},
    {title:"逛逛网(厦门)有限公司", worktype:"前端工程师", time:"2017.04 - 2021.01",p1:"第一点",  p2:"第二点" ,p3:"第三点",p4:"第四点"},
  ];
  currentName = "first";
}
</script>
<style lang="scss" scoped>
$boxRadius:60px;
$lineHeight:96px;
$infoRadius:30px;
$infoPadding: 30px;
$fontSize24: 24px;
$fontSize18: 18px;
$fontSize30: 30px;
$itemBackGround:#2C2E37;
$borderCircle: 100px;
$border50: 50%;
$spanHeight:46px;
$dividerBack:#1F2026;
$boxMarginTop:40px;
$boxMarginTop20:20px;
.resume-box {
  margin-top: 200px;
  border-radius: $boxRadius;
  background: #181b1f;
}
.resume {
  background-color: $dividerBack;
  padding: 0 40px 40px;
  border-radius: $boxRadius;
  > .status {
    height: $lineHeight;
    overflow: hidden;
    display: flex;
    > .time {
      width: 200px;
      font-size: $fontSize30;
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
    margin-top: 70px;
    h1 {
      font-size: $fontSize30;
      .abtn{
        color: $dividerBack;
        font-size: 12px;
        background: #FBDD40;
        padding: 1px 5px;
        border-radius: 4px;
      }
    }
    p {
      width: 470px;
      font-size: 18px;
      margin-top: 10px;
      color: #aaa;
    }
  }
  .base-info{
    margin-top: 50px;
    background: #293C43;
    border-radius: $infoRadius;
    padding: $infoPadding 30px;
    .head{
      .headBorder {
        border: 4px solid white;
        border-radius: 50%;
      }
      >.my-info{
        display: inline-block;
        margin-left: 20px;
        font-size: 18px;
        h2{
          font-size: 30px;
        }
        .info1{
          margin-top: 10px;
          p{
            margin-right: 30px;
            span{
              padding-left: 5px;
            }
          }
        }
      }
    }
    
  }
  .skill-introduce{
    p{
      font-size: $fontSize18;
      line-height: 30px;
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
  .work-experience,.skill-introduce{
    >h2{
      font-size: 30px;
      margin-top: $boxMarginTop;
    }
    >.content{
      margin-top: $boxMarginTop20;
      background: #232A34;
      padding: $infoPadding;
      border-radius: $infoRadius;
    }
  }
  .work-experience{
    margin-top: $boxMarginTop;
    >.content{
      >.time{
        font-size: 16px;
        color: #FBDD40;
      }
      >.name{
        font-size: 18px;
        color: #FBDD40;
        margin-top: 10px;
        span{
          margin-right: 70px;
          font-weight: bold;
        }
      }
      >.info{
        margin-top: 30px;
        >p{
          color: #fff;
          font-size: 16px;
          line-height: 26px;
          margin-top: 20px;
        }
      }
    }
  }
  .skill-and-like{
    margin-top: $boxMarginTop;
    background: $itemBackGround;
    border-radius: $infoRadius;
    padding: $infoPadding;
    .tabs {
      display: flex;
      flex-wrap: wrap;
      margin-top: 30px;
      >li{
        width: 20%;
        text-align: center;
        margin-top: 30px;
      }
      li > .tab-bg{
        background: #fff;
        border-radius: $border50;
        height: 88px;
        width: 88px;
        display: inline-block;
        line-height: 88px;
        img{
          height: 50px;
        }
        .text{
          font-size: 24px;
          color: #FF6C36;
          font-weight: bold;
        }
        .design{
          display: inline-block;
          height: 44px;
          width: 44px;
          font-size: 24px;
          font-weight: bold;
          line-height: 44px;
          border-radius: 6px;
          border: 2px solid;
          &.ps{
            background: #061E26;
            color: #D9F5FF;
            border-color: #48C9FC;
          }
          &.ai{
            background: #251402;
            color: #F68123;
            border-color: #F68123;
          }
          &.xd{
            background: #470137;
            color: #FFACFF;
            border-color: #98154D;
          }
        }
      }
      li> .tab-bg.bg{
        background: #444857;
      }
      li>p{
        margin-top: 10px;
      }
    }
    .like{
      height: 400px;
      position: relative;
      margin-top: 30px;
      span{
        position: absolute;
        background: rgba($color: #fff, $alpha: 0.1);
        border-radius: 4px;
      }
    }
  }
  .thanks{
    margin-top: $boxMarginTop;
    padding: 0 250px;
    .el-divider__text{
      background: $dividerBack;
      font-size: 24px;
      color: #444857;
    }
    .el-divider{
      background-color: #444857;
    }
  }
}
</style>
<style lang="scss">
.skill-and-like{
  .el-tabs__nav-wrap::after{
    width: 0;
  }
  .el-tabs__nav{
    background: #fff;
    width: 420px;
    height: 80px;
    margin: 0 auto;
    border-radius: 50px;
    .el-tabs__item{
      font-size: 24px;
      width: 210px;
      text-align: center;
      z-index: 1;
      line-height: 80px;
    }
  }
  .el-tabs__active-bar{
    height: 80px;
    border-radius: 50px;
  }
  .is-active{
    color: #fff !important;
  }
  .el-tabs__nav-wrap{
    text-align: center;
  }
  .el-tabs__nav-scroll{
    display: inline-block;
  }
}
</style>