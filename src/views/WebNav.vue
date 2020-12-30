<template>
  <Layout>
    <div class="webnav">
      <div class="list">
        <div class="title">关于设计</div>
        <WebNavList :DesignWeb="DesignWeb"></WebNavList>
      </div>
      <div class="list">
        <div class="title">关于前端</div>
        <WebNavList :DesignWeb="ForeEndWeb"></WebNavList>
      </div>
    </div>
  </Layout>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";
import WebNavList from '../components/WebNavList.vue';
@Component({
  name:"WebNav",
  components:{ WebNavList },
})
export default class ArticleDetail extends Vue {
  DesignWeb = [
    {
      id:1,
      type: 'design',
      logoUrl: require('../assets/image/dribbble.png'),
      webUrl: 'https://dribbble.com/',
      describe: '设计师必备的视觉设计'
    },
    {
      id:2,
      type: 'design',
      logoUrl:require('../assets/image/huaban.png'),
      webUrl: 'https://huaban.com/',
      describe: '启发设计灵感，国内比较好的'
    },
    {
      id:3,
      type: 'design',
      logoUrl:require('../assets/image/zhanku.png'),
      webUrl: 'https://www.zcool.com.cn/',
      describe: ''
    },
    {
      id:4,
      type: 'design',
      logoUrl:require('../assets/image/shijue.png'),
      webUrl: 'https://www.vcg.com/',
      describe: '正版高清图片、音视频素材'
    },
    {
      id:5,
      type: 'design',
      logoUrl:require('../assets/image/alibaba.png'),
      webUrl: 'https://www.iconfont.cn/',
      describe: '阿里图标库'
    },
    {
      id:6,
      type: 'design',
      logoUrl:require('../assets/image/qiantu.png'),
      webUrl: 'https://www.58pic.com/',
      describe: '海量设计素材下载'
    },
    {
      id:7,
      type: 'design',
      logoUrl:require('../assets/image/shetu.png'),
      webUrl: 'https://699pic.com/',
      describe: '图片、插画、视频、模板'
    },
    {
      id:8,
      type: 'design',
      logoUrl:require('../assets/image/pakutaso.png'),
      webUrl: 'https://www.pakutaso.com/',
      describe: '免费下载日本流行的照片'
    },
    {
      id:9,
      type: 'design',
      logoUrl:require('../assets/image/straightline.png'),
      webUrl: 'http://bm.straightline.jp/',
      describe: '不错的日本设计网站'
    },
    {
      id:10,
      type: 'design',
      logoUrl:require('../assets/image/colorhunt.png'),
      webUrl: 'https://colorhunt.co/',
      describe: '不错的配色网站'
    }
  ];
  ForeEndWeb = [
    {
      id:1,
      type: 'foreEnd',
      logoUrl: require('../assets/image/vue.png'),
      webUrl: 'https://cn.vuejs.org/',
      describe: '渐进式 JavaScript 框架'
    },
    {
      id:2,
      type: 'foreEnd',
      logoUrl: require('../assets/image/github.png'),
      webUrl: 'https://github.com/',
      describe: '面向开源及私有软件项目托管平台'
    },
    {
      id:3,
      type: 'foreEnd',
      logoUrl: require('../assets/image/codebox.png'),
      webUrl: 'https://codesandbox.io/',
      describe: '在线创建各种项目实现代码运行'
    },
    {
      id:4,
      type: 'foreEnd',
      logoUrl: require('../assets/image/xiedaimala.png'),
      webUrl: 'https://xiedaimala.com/',
      describe: '我的前端学习网站'
    },
    {
      id:5,
      type: 'foreEnd',
      logoUrl: require('../assets/image/juejin.png'),
      webUrl: 'https://juejin.cn/',
      describe: '高手分享中文技术社区'
    },
    {
      id:6,
      type: 'foreEnd',
      logoUrl: require('../assets/image/zhihu.png'),
      webUrl: 'https://www.zhihu.com/',
      describe: '比较真实的问答平台'
    },
    {
      id:7,
      type: 'foreEnd',
      logoUrl: require('../assets/image/mdn.png'),
      webUrl: 'https://developer.mozilla.org/zh-CN/',
      describe: 'JS api查询'
    },
    {
      id:8,
      type: 'foreEnd',
      logoUrl: require('../assets/image/bilibili.png'),
      webUrl: 'https://www.bilibili.com/',
      describe: '学习平台，免费的视频教学'
    },
    {
      id:9,
      type: 'foreEnd',
      logoUrl: require('../assets/image/jsbin.png'),
      webUrl: 'https://jsbin.com/',
      describe: '在线写代码'
    },
    {
      id:10,
      type: 'foreEnd',
      logoUrl: require('../assets/image/bootcdn.png'),
      webUrl: 'https://www.bootcdn.cn/',
      describe: '各个JS框架的cdn'
    },
    {
      id:11,
      type: 'foreEnd',
      logoUrl: require('../assets/image/element.png'),
      webUrl: 'https://element.eleme.cn/',
      describe: '前端 UI 框架'
    },
    {
      id:12,
      type: 'foreEnd',
      logoUrl: require('../assets/image/swiper.png'),
      webUrl: 'https://3.swiper.com.cn/',
      describe: '轮播(开源、免费、稳定、功能强大)'
    },
    {
      id:13,
      type: 'foreEnd',
      logoUrl: require('../assets/image/muse-ui.png'),
      webUrl: 'https://muse-ui.org/#/zh-CN/list',
      describe: '移动端 UI 框架'
    },
    {
      id:14,
      type: 'foreEnd',
      logoUrl: require('../assets/image/ant.png'),
      webUrl: 'https://www.antdv.com/',
      describe: '移动端 UI 框架（推荐）'
    },
    {
      id:15,
      type: 'foreEnd',
      logoUrl: require('../assets/image/vant.png'),
      webUrl: 'https://youzan.github.io/',
      describe: '移动端 UI 框架（推荐）'
    },
    {
      id:16,
      type: 'foreEnd',
      logoUrl: require('../assets/image/taro.png'),
      webUrl: 'https://taro-docs.jd.com/',
      describe: '基于 react 的 UI 框架'
    },
    {
      id:17,
      type: 'foreEnd',
      logoUrl: require('../assets/image/bootstrap.png'),
      webUrl: 'https://v3.bootcss.com/',
      describe: '最古老的前端框架，强大'
    },
    {
      id:18,
      type: 'foreEnd',
      logoUrl: require('../assets/image/momentjs.png'),
      webUrl: 'http://momentjs.cn/',
      describe: '日期处理类库'
    },
    {
      id:19,
      type: 'foreEnd',
      logoUrl: require('../assets/image/dayjs.png'),
      webUrl: 'https://dayjs.fenxianglu.cn/',
      describe: '极简的JavaScript日期库'
    },
    {
      id:20,
      type: 'foreEnd',
      logoUrl: require('../assets/image/base64.png'),
      webUrl: 'https://www.npmjs.com/package/js-base64',
      describe: 'Base64 编码或解码'
    },
    {
      id:21,
      type: 'foreEnd',
      logoUrl: require('../assets/image/animate.png'),
      webUrl: 'http://www.animate.net.cn/',
      describe: 'css3动画插件'
    },
    {
      id:22,
      type: 'foreEnd',
      logoUrl: require('../assets/image/webpack.png'),
      webUrl: 'https://www.webpackjs.com/',
      describe: '打包所有的样式'
    }
  ]
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
    
  }
}
</style>