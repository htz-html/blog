<template>
  <Layout>
    <div class="resume">
      <div class="left">
        <div class="head">
          <div style="margin-bottom:20px;"><router-link to='/resume2' class="abtn">跳转设计版</router-link></div>
          <el-image
          style="width: 150px; height: 180px"
          :src="url"
          fit="cover"></el-image>
          <h1>陆杨清</h1>
          <p>求职意向：前端工程师</p>
        </div>
        <div class="base-info">
          <h3>基本信息</h3>
          <ul>
            <li v-for="(item,index) in baseInfo" :key="index">
              <i class="iconfont" :class="item.iconName"></i><span>{{item.name}}</span>
            </li>
          </ul>
        </div>
        <div class="my-like">
          <h3>兴趣爱好</h3>
          <p>篮球、乒乓球、知乎、新闻等</p>
        </div>
      </div>
      <div class="right">
        <div class="my-skill">
          <div class="title flex-start">
            <i class="iconfont iconweb"></i>
            <span>技能掌握</span>
          </div>
          <div class="content">
            <p>1、熟悉HTML, CSS, JS, Vue，Promise, <span>AxiosPromise</span>, AxiosPromise, Axios，你好，我是你的小可</p>
            <p>2、熟悉HTML, CSS, JS, Vue，Promise, Axios</p>
            <p>3、熟悉HTML, CSS, JS, Vue，Promise, Axios</p>
            <p>4、熟悉HTML, CSS, JS, Vue，Promise, Axios</p>
          </div>
        </div>
        <div class="my-work-experience">
          <div class="title flex-start">
            <i class="iconfont iconexperience"></i>
            <span>工作经历</span>
          </div>
          <div class="content">
            <div class="info" v-for="(item,index) in works" :key="index">
              <span class="time">{{item.time}}</span>
              <div class="company"><span>{{item.company}}</span><span>{{item.worktype}}</span></div>
              <div class="introduce">
                <p v-if="item.p1">1、{{item.p1}}。</p>
                <p v-if="item.p2">2、{{item.p2}}。</p>
                <p v-if="item.p3">3、{{item.p3}}。</p>
                <p v-if="item.p4">4、{{item.p4}}。</p>
                <p v-if="item.p5">5、{{item.p5}}。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="my-work-experience">
          <div class="title flex-start">
            <i class="iconfont iconitem"></i>
            <span>项目经验</span>
          </div>
          <div class="content">
            <div class="info" v-for="(item,index) in items" :key="index">
              <span class="time">项目时间：{{item.itemTime}}</span>
              <div class="company"><span>项目名称：{{item.itemName}}</span><span v-if="item.itemTool">项目工具：{{item.itemTool}}</span></div>
              <div class="duty">{{item.itemInfo}}</div>
              <div class="introduce">
                <p>我的职责：</p>
                <p v-if="item.p1">1、{{item.p1}}。</p>
                <p v-if="item.p2">2、{{item.p2}}。</p>
                <p v-if="item.p3">3、{{item.p3}}。</p>
                <p v-if="item.p4">4、{{item.p4}}。</p>
                <p v-if="item.p5">5、{{item.p5}}。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="my-other-skill">
          <div class="title flex-start">
            <i class="iconfont icondesign"></i>
            <span>其他技能</span>
          </div>
          <div class="content">
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
          </div>
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
    {name:"男", iconName:"iconsex"},
    {name:"大专-计算机应用", iconName:"iconeducation"},
    {name:"湖北恩施", iconName:"iconaddress"},
    {name:"18671867439", iconName:"iconphone"},
    {name:"1006676722@qq.com", iconName:"iconmailbox"}
  ];
  works=[
    {company:"厦门好邦伲家政服务有限公司",worktype:"前端工程师", time:"2017.04 - 2021.01",p1:"设计网页+公众号+小程序+App；",  p2:"第二点" ,p3:"第三点",p4:"第四点"},
    {company:"逛逛网(厦门)有限公司", worktype:"前端工程师", time:"2017.04 - 2021.01",p1:"第一点",  p2:"第二点" ,p3:"第三点",p4:"第四点"},
  ];
  items=[
    {itemName:"公司CRM",itemTool:"Vue", itemTime:"2017.04 - 2021.01",itemInfo:'威仪服饰有限公司是一家专业从事集研发、设计、生产、销售为一体的专业化销售公司。公司将商务制服系列定为主打产品，以优质的产品，树立了诚信可靠的企业形象。此项目是承接网上销售和售后服务，产品更新展示和公司基本信息。',p1:"设计网页+公众号+小程序+App；",  p2:"第二点" ,p3:"第三点",p4:"第四点"},
    {itemName:"好邦伲-公众号", itemTime:"2017.04 - 2021.01",itemInfo:'获得更多权限；一个是人脉管理，将对电影爱好者不管是投资者还是电影人联系在一起；一个是在线约谈，把一些新的电影拿出来给那些有兴趣的人去投资，让他们可以在线约谈。',p1:"第一点",  p2:"第二点" ,p3:"第三点",p4:"第四点"},
    {itemName:"好邦伲官网", itemTime:"2017.04 - 2021.01",itemInfo:'通过调研webpack打包优化方案，静态资源体积从多少减小到多少，优化了用户体验。方案发布后，页面打开率增加了多少，巴拉巴拉。通过引入前端监控方案，能更早定位与发现问题，引入后，让舆情反馈从每周多少降低到每周多少。通过引入node中间层，实现了前后端之间再一步分离。使得后端接口更微服务化、更专注于功能实现而非页面逻辑，需求迭代更加快速。引入之后，减少了多少后端开发成本，提高了多少研发效率。',p1:"第一点",  p2:"第二点" ,p3:"第三点",p4:"第四点"},
  ];
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
$dividerBack:#2170DD;
$boxMarginTop:40px;
$boxMarginTop20:20px;
$leftMarginTop:40px;
.resume{
  padding: 150px 0 100px 0;
  display: flex;
  color:#333;
  font-size: 16px;
  >.left{
    min-width: 280px;
    background: #1F2026;
    padding-top:20px;
    color: #fff;
    >.head{
      padding: 20px;
      text-align: center;
      .abtn{
        color: #333;
        font-size: 12px;
        background: #FBDD40;
        padding: 2px 5px;
        border-radius: 4px;
      }
      >h1{
        display: inline-block;
        font-size: 36px;
        padding: 20px 0 5px 0;
      }
      >p{
        padding-top: 10px;
      }
    }
    >.base-info{
      >ul>li>span{
        padding-left: 18px;
      }
      >ul{
        margin-top: $leftMarginTop;
        padding: 20px;
        >li{
          padding: 4px 0;
        }
      }
    }
    >.my-like,>.base-info {
      padding-top: 30px;
      position: relative;
      >h3{
        color: #fff;
        font-size: 20px;
        background: $dividerBack;
        padding: 0 20px;
        height: 40px;
        line-height: 40px;
        position: absolute;
        right: -10px;
        left: 0;
      }
      >h3::after{
        content: '';
        width: 0;
        height: 0;
        border-top: 10px solid #1e3c64;
        border-right: 10px solid transparent;
        position: absolute;
        right: 0;
        top: 40px;
      }
    }
    >.my-like{
      p{
        margin-top: $leftMarginTop;
        padding: 20px;
      }
    }
  }
  >.right{
    flex-grow: 1;
    background: #fff;
    padding: 40px 50px 40px 80px;
    >.my-skill,>.my-work-experience,>.my-item-experience,>.my-other-skill{
      margin-top: 30px;
      >.title{
        font-size: 20px;
        color: $dividerBack;
        font-weight: bold;
        position: relative;
        i{
          font-size: 24px;
        }
        span{
          padding-left: 10px;
        }
      }
      >.title::after{
        content: '';
        position: absolute;
        left: 200px;
        top: 14px;
        right: 0;
        height: 2px;
        background: #679fee;
      }
      >.content{
        margin-top: 10px;
        padding-left: 34px;
      }
    }
    >.my-skill{
      >.content{
        p:not(:first-of-type){
          margin-top: 10px;
        }
        p{
          font-weight:bold;
          span{
            color: #ED0909;
            padding: 0 4px;
          }
        }
      }
    }
    >.my-work-experience{
      >.content{
        >.info{
          >.company{
            padding-top: 5px;
            font-weight: bold;
            >span{
              padding-right: 100px;
            }
          }
          >.introduce{
            margin-top: 10px;
            p:not(:first-of-type){
              margin-top: 10px;
            }
            p{
              span{
                color: #ED0909;
                padding: 0 4px;
              }
            }
          }
          >.duty{
            color: #e08836;
            margin-top: 10px;
          }
        }
        >.info:not(:first-child){
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px dashed #ddd;
        }
      }
    }
    >.my-other-skill{
      .tabs {
        display: flex;
        flex-wrap: wrap;
        >li{
          width: 20%;
          text-align: center;
        }
        li > .tab-bg{
          background: #fff;
          border-radius: $border50;
          height: 60px;
          width: 60px;
          display: inline-block;
          line-height: 60px;
          img{
            height: 40px;
          }
          .text{
            font-size: 24px;
            color: #FF6C36;
            font-weight: bold;
          }
          .design{
            display: inline-block;
            height: 32px;
            width: 32px;
            font-size: 18px;
            font-weight: bold;
            line-height: 32px;
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
          background: #333;
        }
        li>p{
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
<style lang="scss">
  .resume {
    >.left >.head .el-image{
        border: 2px solid #ffffff;
      }
  }
</style>