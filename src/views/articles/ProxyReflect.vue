// 文章详情
<script>
dataArticle = [
  {
    id:1,
    title:'对象字面量表示法与 JSON',
    user: 'htz',
    type: 'JavaScript',
    time: '2020年11月22日',
    artUrl:'https://www.yinxiang.com/everhub/note/2586e53f-a66b-4d27-87d6-91330606f89d',
    describe:'对象字面量表示法和 JavaScript Object Notation（JSON）是不同的。虽然他们看起来相似，不同点有： JSON 只允许"property": value syntax形式的属性',
  },
  {
    id:2,
    title:'for...of循环和for...in循环之间的区别',
    user: 'htz',
    type: 'JavaScript',
    time: '2020年10月20日',
    artUrl:'https://www.yinxiang.com/everhub/note/841fcf55-85df-476d-a85c-8dd111574c3e',
    describe:'for of let iterable = [3, 5, 7]; iterable.foo = "hello"; for (let i of iterable) { console.log(i)'
  },
  {
    id:3,
    title:'yield 是什么，干嘛用的',
    user: 'htz',
    type: 'JavaScript',
    time: '2020年11月16日',
    artUrl:'https://www.yinxiang.com/everhub/note/2f5b673a-7957-4f33-a643-64a6c353a1d6',
    describe:'yield 是什么？ yield 是 es6 新的关键字，使生成器函数执行暂停。yield 后面的表达式的值返回给生成器的调用者。它可以被认为是一个基于生成器的版本的 return 关键字。 yiel'
  },
  {
    id:4,
    title:'Proxy（代理） 和 Reflect（反射）',
    user: 'htz',
    type: 'JavaScript',
    time: '2020年12月03日',
    artUrl:'https://www.yinxiang.com/everhub/note/6405d4da-a4f5-421b-ad4d-9057b766d972',
    describe:'解释 proxy: 代理 语法：new Proxy(target,handle) target: 代理目标，拦截模板 handle: 对象，里面定义了拦截行为 get(targe'
  },
  {
    id:5,
    title:'配置参考 | Vue CLI',
    user: 'htz',
    type: 'Vue',
    time: '2020年12月04日',
    artUrl:'https://www.yinxiang.com/everhub/note/1c1a33b8-7b67-43cd-abdb-768c341c02f4',
    describe:'# 配置参考 # 全局 CLI 配置 有些针对 @vue/cli 的全局配置，例如你惯用的包管理器和你本地保存的 preset，都保存在 home 目录下一个名叫 .vuerc 的 JSON 文件。你'
  },
  {
    id:6,
    title:'生成一个随机字符串',
    user: 'htz',
    type: 'JavaScript',
    time: '2020年11月30日',
    artUrl:'https://www.yinxiang.com/everhub/note/e3099ab4-46d7-4d17-88e6-1d9377096741',
    describe:'const NewGuid = () => { const s = []; const hexDigits = "0123456789abcdef"; for (let i = 0; i'
  },
  {
    id:7,
    title:'函数的防抖和节流是个啥？？？',
    user: 'htz',
    type: 'JavaScript',
    time: '2020年11月29日',
    artUrl:'https://www.yinxiang.com/everhub/note/fa4596b1-b934-4c06-ad94-dc95c4c60bae',
    describe:'函数的防抖和节流是个啥？？？ 曾经面试时候被问到过这个，年少的我一脸无知。。。 后来工作中遇到了一个场景：输入名称的同时去服务器校验名称是否重复'
  },
  {
    id:8,
    title:'ES6 语法相关概念',
    user: 'htz',
    type: 'ES6',
    time: '2020年11月29日',
    artUrl:'https://www.yinxiang.com/everhub/note/0885a4c1-c792-4198-a438-d92dc490542a',
    describe:'1.迭代器： 迭代器是一个对象 迭代器是通过使用 next() 方法实现 Iterator protocol(迭代协议) 的任何一个对象，该方法返回具有两个属性的对象：value 和 done 重复调'
  },
  {
    id:9,
    title:'类',
    user: 'htz',
    type: 'ES6',
    time: '2020年11月16日',
    artUrl:'https://www.yinxiang.com/everhub/note/c8ca34fe-9070-454c-babc-c8b272a38fcf',
    describe:'1、函数声明会提升，类声明不会 2、类表达式 之 匿名类 // 未命名/匿名类 let Rectangle = class { constructor(height, width) '
  },
  {
    id:10,
    title:'使用cdn 的形式使用svg 的方法',
    user: 'htz',
    type: 'usage method',
    time: '2020年11月22日',
    artUrl:'https://www.yinxiang.com/everhub/note/edbc13d4-4d43-43e3-ad0e-3120fa9b2188',
    describe:'在页面引入 css <link rel="stylesheet" href="https：//at.alicdn.com/t/font_1267129_34hwdr8dz58.css"> 使用方法'
  },
  {
    id:11,
    title:'双击tab可编辑内容，如图',
    user: 'htz',
    type: '功能',
    time: '2020年11月20日',
    artUrl:'https://www.yinxiang.com/everhub/note/54b5d143-e948-440e-82e8-1629b4da4da5',
    describe:'window.getSelection?window.getSelection().removeAllRanges():document.selection.empty(); ---双击禁止选中文字'
  },
  {
    id:12,
    title:'Es6中import * as xxx from ’....‘',
    user: 'htz',
    type: 'ES6',
    time: '2020年11月18日',
    artUrl:'https://www.yinxiang.com/everhub/note/cf52d4df-44cf-4ca9-b06d-c6c8a54f8247',
    describe:'ES6的模块化分为导出（export）与导入（import）两个模块 1. import * as obj from，这种写法是把所有的输出包裹到obj对象里 // index.js export f'
  },
  {
    id:13,
    title:'解构对象易错点',
    user: 'htz',
    type: 'ES6',
    time: '2020年11月17日',
    artUrl:'https://www.yinxiang.com/everhub/note/b5357ab3-75f8-4c24-89bd-ec70e35298a4',
    describe:'一、无声明赋值 一个变量可以独立于其声明进行解构赋值。 var a, b; ({a, b} = {a: 1, b: 2}); 注意：赋值语句周围的圆括号 ( ... ) 在使用对象字面量无声明解构'
  },
  {
    id:14,
    title:'ES6方法汇总',
    user: 'htz',
    type: 'ES6',
    time: '2020年11月16日',
    artUrl:'https://www.yinxiang.com/everhub/note/6e6db124-5101-4bee-92c9-ba5fa6c54287',
    describe:'一、字符串的扩展 1.codePointAt()：codePointAt方法会正确返回32位的UTF-16字符的码点。对于那些两个字节储存的常规字符，它的返回结果与charCodeAt方法相同。 '
  },
  {
    id:15,
    title:'比较好理解的语法',
    user: 'htz',
    type: 'JavaScript',
    time: '2020年11月15日',
    artUrl:'https://www.yinxiang.com/everhub/note/de0f6d9f-fe98-4af2-81f0-d9864c63bb4e',
    describe:'1. 展开语法，之 apply() 方法一 function myFunction(x, y, z) { } var args = [0, 1, 2]; myFunction.apply(null'
  },
  {
    id:16,
    title:'from（）,有用length属性的对象，返回一个数组',
    user: 'htz',
    type: 'JavaScript',
    time: '2020年11月09日',
    artUrl:'https://www.yinxiang.com/everhub/note/b428e0a2-2df2-4f85-af23-2a40a740e271',
    describe:'from() 方法用于通过拥有 length 属性的对象或可迭代的对象来返回一个数组 var a = "ghjk"; console.log(a.from())'
  },
  {
    id:17,
    title:'Javascript闭包的重点',
    user: 'htz',
    type: 'JavaScript',
    time: '2020年11月08日',
    artUrl:'https://www.yinxiang.com/everhub/note/6423abce-fe55-46e0-afb4-792138d78efa',
    describe:'一、闭包的概念 由于在JavaScript语言中，只有函数内部的子函数才能读取局部变量，因此可以把闭包简单理解成“定义在一个函数内部的函数”。'
  },
  {
    id:18,
    title:'什么是IIFE？',
    user: 'htz',
    type: 'JavaScript',
    time: '2020年11月07日',
    artUrl:'https://www.yinxiang.com/everhub/note/0668f36c-1a85-4749-b783-1b41fcdee3b4',
    describe:'IIFE （ Immediately invoked function expression ）: IIFE ：立即执行函数表达式，也叫立即执行匿名函数'
  },
  {
    id:19,
    title:'Array.every()或者Array.some()',
    user: 'htz',
    type: 'JavaScript',
    time: '2020年11月06日',
    artUrl:'https://www.yinxiang.com/everhub/note/9843a26a-cd14-4aa1-8f45-1e25c6bdee96',
    describe:'相同点： 都不不会对空数组进行检测，不会改变原始数组 1.Array.some(); some 方法用于检测数组中的元素是否有满足指定条件的'
  },
  {
    id:20,
    title:'forEach()和map()的区别',
    user: 'htz',
    type: 'JavaScript',
    time: '2020年11月06日',
    artUrl:'https://www.yinxiang.com/everhub/note/15220126-0204-49b2-b981-1ceae3a1e570',
    describe:'1.map() 方法 map() 方法不会对空数组进行检测 2.forEach forEach() 对于空数组是不会调用回调函数的 不同点： 1、forEach() 返回值是 undefined'
  },
  {
    id:21,
    title:'剩余参数和 arguments对象的区别',
    user: 'htz',
    type: 'ES6',
    time: '2020年11月06日',
    artUrl:'https://www.yinxiang.com/everhub/note/a460f3fd-449b-4efa-85c3-f0f025ae4615',
    describe:'1、剩余参数只包含那些没有对应形参的实参。而 arguments 对象包含了传给函数的所有实参。 2、arguments 不是一个真正的数组，而剩余的参数是真正的 Array 实例，也就是说你能在它上'
  },
  {
    id:22,
    title:'this 指向之 call 或 apply',
    user: 'htz',
    type: 'ES6',
    time: '2020年11月06日',
    artUrl:'https://www.yinxiang.com/everhub/note/777b8bc5-92c2-4be1-9522-891202382857',
    describe:'问题一：call 和 apply 无法改变箭头函数的this指向 var obj = { a: 1, aa : function(a) { var b = v => v + this.'
  },
  {
    id:23,
    title:'var , let , const',
    user: 'htz',
    type: 'ES6',
    time: '2020年11月05日',
    artUrl:'https://www.yinxiang.com/everhub/note/fd46250a-a147-4f7b-bc9b-f23e3f8cb8b9',
    describe:'一.var 和 let 的主要区别在于： 1、var 声明变量的作用域是整个封闭的函数。 function f1(){ var a = 1; { var a = 2; cons'
  },
  {
    id:24,
    title:'Vue.extend 创建的是Vue 构造器',
    user: 'htz',
    type: 'ES6',
    time: '2020年11月05日',
    artUrl:'https://www.yinxiang.com/everhub/note/f23f29dd-4e60-4244-bdf1-717c53652872',
    describe:'Vue.extend 创建的是 Vue 构造器 var xxx = Vue.extend({}); //xxx不是一个对象，更不是Vue的实例 var yyy = new xxx()'
  },
  {
    id:25,
    title:'测试种类和选择测试工具',
    user: 'htz',
    type: 'Vue',
    time: '2020年11月04日',
    artUrl:'https://www.yinxiang.com/everhub/note/079d2fb9-dc3c-48cd-b1c0-cce25ed0a3ff',
    describe:'测试在个人和团队构建新特性、重构代码、修复bug等工作中起到关键的作用。 测试主分三大类： 单元测试 组件测试 端到端测试（E2E，end-to-end） 一、单元测试 介绍：将独立单元的代码进行隔离'
  },
  {
    id:26,
    title:'CommonJS是一种规范，到底规范了什么',
    user: 'htz',
    type: 'JavaScript',
    time: '2020年11月04日',
    artUrl:'https://www.yinxiang.com/everhub/note/4ebe5470-b609-4ca8-9733-4b03259449ee',
    describe:'1.什么是commonJS 答：commonJS是JS模块化开发的标准，它是一种规范，NodeJS是这种规范的实现 CommonJS用来规范JS编程'
  },
  {
    id:27,
    title:'Pug、Babel、webpack、browserify',
    user: 'htz',
    type: 'Vue',
    time: '2020年11月04日',
    artUrl:'https://www.yinxiang.com/everhub/note/0be71312-a064-484d-b8f6-63f9fbe22d38',
    describe:'Pug是一款健壮、灵活、功能丰富的HTML模板引擎,专门为 Node.js 平台开发。 Babel是一个编译器，能将ES2015+的代码转换正ES2015。 '
  },
  {
    id:28,
    title:'使用单文件组件的好处',
    user: 'htz',
    type: 'Vue',
    time: '2020年11月03日',
    artUrl:'https://www.yinxiang.com/everhub/note/22425835-4eb3-4631-bd8a-5d8245b9cc5f',
    describe:'Vue.component({ el:"#home", template:` <div>我是组件home</div> `, created(){} })'
  },
  {
    id:29,
    title:'什么是Vuex，它和单纯的全局对象有以下两点不同',
    user: 'htz',
    type: 'Vue',
    time: '2020年11月03日',
    artUrl:'https://www.yinxiang.com/everhub/note/71a8daeb-8daa-4001-9d21-2c10e5bb5a7e',
    describe:'什么是Vuex？ Vuex 是一个专为 Vue.js 应用程序开发的状态管理器，采用集中式存储管理应用的所有组件的状态。也可以理解为vuex主要存储一些全局的变量'
  },
  {
    id:30,
    title:'props接收一个对象，必须写成return一个对象的函数形式',
    user: 'htz',
    type: 'Vue',
    time: '2020年11月02日',
    artUrl:'https://www.yinxiang.com/everhub/note/6bf8b6d8-beeb-4a89-a33e-b2dfb834054c',
    describe:'这样写会报错。props接收一个对象，必须写成return一个对象的函数形式'
  },
  {
    id:31,
    title:'在学造轮子时的简单知识',
    user: 'htz',
    type: '造轮子',
    time: '2020年11月01日',
    artUrl:'https://www.yinxiang.com/everhub/note/39b8db29-0269-4f1c-bc8e-386b5cf0d434',
    describe:'一、插槽slot的使用 1.父组件：在使用组件的地方写上内容，就会出现在子组件slot里面 <div > <g-button>我爱JS</g-button> </div> 2.子组件 <butto'
  },
  {
    id:32,
    title:'Linux中mkdir和touch命令区别',
    user: 'htz',
    type: '造轮子',
    time: '2020年11月01日',
    artUrl:'https://www.yinxiang.com/everhub/note/7efb81d3-f3fc-44b1-910b-aa05ea2c488f',
    describe:'一、目的 本文将介绍linux下新建文件或文件夹、删除文件或文件夹命令。 touch能够新建文件，mkdir用来新建文件夹。rm用来删除文件或文件夹'
  },
  {
    id:33,
    title:'解决问题的思路',
    user: 'htz',
    type: 'Vue',
    time: '2020年10月30日',
    artUrl:'https://www.yinxiang.com/everhub/note/35b28059-15b2-45ae-b71c-59fa50607796',
    describe:'如果遇到一些莫名的问，百度也难找到，第一是重启机器。如果还是不行，就退回到之前提交的版本，看看是在哪里改错了'
  },
  {
    id:34,
    title:'简单来说created 和 mounted',
    user: 'htz',
    type: 'Vue',
    time: '2020年10月30日',
    artUrl:'https://www.yinxiang.com/everhub/note/9fba01ab-7a26-438a-a318-2a93b94ce8c7',
    describe:'请问created 和 mounted有什么区别 created是创建这个对象，但并没有挂载到页面上。 created是创建这个组件，但并没有放在页面里面'
  },
  {
    id:35,
    title:'git branch / checkout 命令说明',
    user: 'htz',
    type: '造轮子',
    time: '2020年10月29日',
    artUrl:'https://www.yinxiang.com/everhub/note/e1d9bdd2-91b2-4f78-8b21-623cc64834ca',
    describe:'Git branch : 新建分支         Git branch xxx      // xxx 是分支名。主分支为 master。         把代码push到分支上'
  },
  {
    id:36,
    title:'karma、mocha、sinon-chai分别是干什么的',
    user: 'htz',
    type: '造轮子',
    time: '2020年10月29日',
    artUrl:'https://www.yinxiang.com/everhub/note/4f2346e0-88b3-41b5-8fc3-3e9483847795',
    describe:'karma 1.它有一个配置：karma.conf.js，他主要是拿来打开浏览器的，就是下面这句。打开浏览器才能测试用例'
  },
  {
    id:37,
    title:'yarn 安装指定版本 + 特别的命令',
    user: 'htz',
    type: 'Vue',
    time: '2020年11月21日',
    artUrl:'如安装dayjs的1.8.0 yarn add dayjs@1.8.0 1. git open 特别提出以下，上传到github上的库。当你git push之后，',
    describe:'https://www.yinxiang.com/everhub/note/c63922b0-6e60-4c56-94d4-d807b02dcf59'
  },
  {
    id:38,
    title:'造轮子--发布npm包',
    user: 'htz',
    type: '造轮子',
    time: '2020年11月12日',
    artUrl:'https://www.yinxiang.com/everhub/note/12970828-e6a1-42c0-8cd7-d3b51201b8bc',
    describe:'1.写好轮子，保证npm run test测试通过 2.在根目录添加index.js，把所有轮子导出：如... import Button from '
  },
  {
    id:39,
    title:'单元测试之自动测试（2种）',
    user: 'htz',
    type: '造轮子',
    time: '2020年10月16日',
    artUrl:'https://www.yinxiang.com/everhub/note/84658c65-60e4-4bd5-9913-f1c1ce343a6c',
    describe:'一、使用npm run dev-test：执行一次就OK，后面就直接保存页面即可打包测试 1.dev-test执行的是：“parcel watch test/* --no-cache & karma'
  },
  {
    id:40,
    title:'单元测试-遇到一个困扰很久的bug',
    user: 'htz',
    type: '造轮子',
    time: '2020年10月16日',
    artUrl:'https://www.yinxiang.com/everhub/note/8a8cc25a-a4c9-4885-9b30-fe51cd085f78',
    describe:'按照要求。添加了以下文件，并写入代码 问题：运行npm run test，出错，下图 npm run test打包各种js文件，有那么一秒钟打开了chrome浏览器'
  },
  {
    id:41,
    title:'有关命令行的命令',
    user: 'htz',
    type: 'Vue',
    time: '2020年10月12日',
    artUrl:'https://www.yinxiang.com/everhub/note/39958236-cd60-496a-8a20-24cca0e5f40e',
    describe:'cd ~   到根目录 ls  列出当前目录下的文件 Tab 键展示建议要去方向 (mkdir  文件/文件夹名称)  创建文件、文件夹 (rm -f -r 文件/文件夹)  强制删除文件夹或文件'
  },
  {
    id:42,
    title:'BDD、TDD、Assert',
    user: 'htz',
    type: '造轮子',
    time: '2020年10月12日',
    artUrl:'https://www.yinxiang.com/everhub/note/d7241529-3ae6-4e18-9ac7-65183c4b651a',
    describe:'BDD: behavior driven development - 行为驱动开发 意思是开发者满足用户的某种行为，比如按钮，可点击的行为 TDD：test driven development '
  },
  {
    id:43,
    title:'什么时候使用 -D',
    user: 'htz',
    type: 'Vue',
    time: '2020年10月10日',
    artUrl:'https://www.yinxiang.com/everhub/note/00363f98-4079-4f57-b5f9-9c190292eb18',
    describe:'npm i vue npm i -D parcel-bundler -D：全名developer：开发者 1.我们在安装vue的时候，是没有-D，安装parcel为什么要-D，因为vue是给用户使用的'
  },
  {
    id:44,
    title:'仓库创建过程',
    user: 'htz',
    type: '造轮子',
    time: '2020年10月10日',
    artUrl:'https://www.yinxiang.com/everhub/note/01750e1c-07c2-46bf-bc77-ff339967bade',
    describe:'一、首先cd到你要创建的目录下 如：在桌面创建一个文件夹 cd ~ mkdir gulu-demo //创建了一个gulu-demo的文件夹'
  },
  {
    id:45,
    title:'VUE生命周期详解',
    user: 'htz',
    type: 'Vue',
    time: '2020年9月24日',
    artUrl:'https://www.yinxiang.com/everhub/note/8638a0e8-3f88-4ca3-8711-70643bfd86c4',
    describe:'1、开始：new Vue() 2、Observe Data 3、Init Events 4、验证是否有el和template 5、Create vm.$el and replace ‘el’ with'
  },
  {
    id:46,
    title:'echarts文档',
    user: 'htz',
    type: 'Vue',
    time: '2020年11月05日',
    artUrl:'https://www.yinxiang.com/everhub/note/afa95ac3-b6e6-491a-ae95-5b72dde9b9e8',
    describe:'如果找不到，就去这里找https://echarts.apache.org/zh/cheat-sheet.html 基本的代码 const main = document.getElementById'
  },
  {
    id:47,
    title:'遇到的bug',
    user: 'htz',
    type: 'Vue',
    time: '2020年9月30日',
    artUrl:'https://www.yinxiang.com/everhub/note/a226f1ea-e32b-4e37-9ee5-40518b865170',
    describe:'1.（用时半天）在使用echarts的时候，最开始我只是做最简单的创建 按照视频：创建文件 > 新建 src/index.html > 建main.js > 安装parcel-bundler > pa'
  },
  {
    id:48,
    title:'vsCode 快捷键',
    user: 'htz',
    type: 'Vue',
    time: '2020年9月15日',
    artUrl:'https://www.yinxiang.com/everhub/note/70f55ae2-4828-4780-8c20-50adfeffab26',
    describe:'vsCode 快捷键'
  },
  {
    id:49,
    title:'ISO8601-表示时间日期',
    user: 'htz',
    type: 'Vue',
    time: '2020年10月26日',
    artUrl:'https://www.yinxiang.com/everhub/note/64c7d8f7-4a46-4faa-b843-4170c9e85990',
    describe:'第一步 var d = new Date() console.log(d) 结果：Mon Oct 12 2020 08:40:35 GMT+0800 (中国标准时间) {} 第二步 d.toISOS'
  },
  {
    id:50,
    title:'父组件点击事件触发子组件',
    user: 'htz',
    type: 'Vue',
    time: '2020年9月26日',
    artUrl:'https://www.yinxiang.com/everhub/note/0b3b1909-cb36-453a-8773-9088689fedf6',
    describe:'列举一个简单的例子： 1.父组件 <div> <Button></Button> </div> 2.子组件，文件名为Button <template> <button>删除按钮</b'
  },
  {
    id:51,
    title:'route和router的区别',
    user: 'htz',
    type: 'Vue',
    time: '2020年9月18日',
    artUrl:'https://www.yinxiang.com/everhub/note/665550c8-d2b4-437e-b92a-602714814ed0',
    describe:'route：用来获取路由的信息的。 router：就是路由器，路由器进行一些转发操作'
  },
  {
    id:52,
    title:'如何在TS文件里面引入一个JS 的方法',
    user: 'htz',
    type: 'Vue',
    time: '2020年11月23日',
    artUrl:'https://www.yinxiang.com/everhub/note/d0b26da1-0dff-493d-b650-ee807bb7005b',
    describe:'一、使用require形式 1.model.js文件 const localStorageKeyName = "recordList" const model = { fetch(){'
  },
  {
    id:53,
    title:'写Vue组件的三种方式（单文件组件）',
    user: 'htz',
    type: 'Vue',
    time: '2020年9月24日',
    artUrl:'https://www.yinxiang.com/everhub/note/d233e92c-307a-409a-afb5-63d672fbd310',
    describe:'推荐使用第二种 用JS对象 export default { data, props, methods, .... } 用TS类 （js新语法） <script la'
  },
  {
    id:54,
    title:'使用TypeScript的好处，TypeScript只是增加了类型声明，其他都是正常的JS代码',
    user: 'htz',
    type: 'Vue',
    time: '2020年9月23日',
    artUrl:'https://www.yinxiang.com/everhub/note/3ffc9b73-2118-4d83-a7a0-16e5f7a53225',
    describe:'TS的三个好处 1.文档自动提示更自能 2.你不能随便写.tostring() 3.编辑报错，只要你错'
  },
  {
    id:55,
    title:'TS（TypeScript）的本质',
    user: 'htz',
    type: 'Vue',
    time: '2020年9月21日',
    artUrl:'https://www.yinxiang.com/everhub/note/33614960-1e8a-403f-8654-a097089eb7b8',
    describe:'就是在js上面写一些“ ：类型 ”，这样我们就通过类型去检查Js有没有错，检查的人呢是一个叫.tsc这么一个程序，或者是babel来检查'
  },
  {
    id:56,
    title:'你知道哪些 JS 的库或者框架，他们的作用分别是什么？请至少说出 5 个',
    user: 'htz',
    type: 'JavaScript',
    time: '2020年9月06日',
    artUrl:'https://www.yinxiang.com/everhub/note/4d38967e-2429-422c-9a34-6bc7ffae7f76',
    describe:'1.jQuery 2.modulejs modulejs是极致模块化的且面向对象的javascript框架，modulejs能让你在简单易用的前提下写出更佳维护性和可重用性的javascript代码。'
  }
]
</script>

// 企业项目
<script>
projectData = [
  {
    p1:"2020 秋季书单：用阅读 V8是Google的开源高性能JavaScript和WebAssembly引擎，用C ++编写。它用于Chrome和Node.js等。",
    p2:"它实现ECMAScript和WebAssembly，并在Windows 7或更高版本，macOS 10.12+以及使用x64，IA-32，ARM或MIPS处理器的Linux系统上运行。",
    p3:"2V8可以独立运行，也可以嵌入到任何C ++应用程序中。",
    p4:"2020 秋季书单：用阅读",
    tag1:"CRM",
    tag2:"一年前",
    tag3:"Vue",
    tag4:"其他",
    btnName:"1",
    webUrl:"",
    imgUrl:"../src/assets/image/hbn_ls.png",
    videoUrl:""
  },
  {
    p1:"和WebAssembly引擎，用C ++编写。它用于Chrome和Node.js等。",
    p2:"macOS 10.12+以及使用x64，IA-32，ARM或MIPS处理器的Linux系统上运行。",
    p3:"2V8可以独立运行，也可以嵌入到任何应用程序中。",
    tag1:"web",
    tag2:"一年前",
    tag3:"Vue",
    tag4:"",
    btnName:"1",
    webUrl:"https://www.haobangni.com/hbnls_PC/",
    imgUrl:"../assets/image/hbn_ls.png",
    videoUrl:""
  },
  {
    p1:"和WebAssembly引擎，用C ++编写。它用于Chrome和Node.js等。",
    p2:"macOS 10.12+以及使用x64，IA-32，ARM或MIPS处理器的Linux系统上运行。",
    p3:"2V8可以独立运行，也可以嵌入到任何应用程序中。",
    tag1:"web",
    tag2:"一年前",
    tag3:"Vue",
    tag4:"",
    btnName:"1",
    webUrl:"https://www.haobangni.com/hbnls/",
    imgUrl:"../assets/image/hbn_ls.png",
    videoUrl:""
  },
  {
    p1:"和WebAssembly引擎，用C ++编写。它用于Chrome和Node.js等。",
    p2:"macOS 10.12+以及使用x64，IA-32，ARM或MIPS处理器的Linux系统上运行。",
    p3:"2V8可以独立运行，也可以嵌入到任何应用程序中。",
    tag1:"web",
    tag2:"一年前",
    tag3:"Vue",
    tag4:"",
    btnName:"1",
    webUrl:"https://m.haobangni.com/pc/",
    imgUrl:"../assets/image/hbn_ls.png",
    videoUrl:""
  },
  {
    p1:"和WebAssembly引擎，用C ++编写。它用于Chrome和Node.js等。",
    p2:"macOS 10.12+以及使用x64，IA-32，ARM或MIPS处理器的Linux系统上运行。",
    p3:"2V8可以独立运行，也可以嵌入到任何应用程序中。",
    tag1:"公众号",
    tag2:"半年前",
    tag3:"BootStrap",
    tag4:"",
    btnName:"1",
    webUrl:"https://bm.haobangni.com/m/",
    imgUrl:"../assets/image/hbn_ls.png",
    videoUrl:""
  }
]
</script>

// 网站导航
<script>
webNavData = [
  {
    id:1,
    type: 'design',
    logoUrl:'',
    webUrl: 'https://dribbble.com/',
    describe: '设计师必备的视觉设计'
  },
  {
    id:2,
    type: 'design',
    logoUrl:'',
    webUrl: 'https://huaban.com/',
    describe: '启发设计灵感，国内比较好的'
  },
  {
    id:2,
    type: 'design',
    logoUrl:'',
    webUrl: 'https://www.zcool.com.cn/',
    describe: ''
  },
  {
    id:2,
    type: 'design',
    logoUrl:'',
    webUrl: 'https://huaban.com/',
    describe: '启发设计灵感，国内比较好的'
  },
  {
    id:1,
    type: 'design',
    logoUrl:'',
    webUrl: 'https://www.pakutaso.com/',
    describe: '免费下载日本流行的照片'
  },
  {
    id:2,
    type: 'design',
    logoUrl:'',
    webUrl: 'http://bm.straightline.jp/',
    describe: '不错的日本设计网站'
  },
  {
    id:2,
    type: 'design',
    logoUrl:'',
    webUrl: '',
    describe: ''
  },
  {
    id:2,
    type: 'design',
    logoUrl:'',
    webUrl: '',
    describe: ''
  },
  {
    id:2,
    type: 'design',
    logoUrl:'',
    webUrl: '',
    describe: ''
  },
  {
    id:2,
    type: 'design',
    logoUrl:'',
    webUrl: '',
    describe: ''
  },
  {
    id:2,
    type: 'design',
    logoUrl:'',
    webUrl: '',
    describe: ''
  },
  {
    id:2,
    type: 'design',
    logoUrl:'',
    webUrl: '',
    describe: ''
  },
  {
    id:2,
    type: 'design',
    logoUrl:'',
    webUrl: '',
    describe: ''
  },
  {
    id:2,
    type: 'design',
    logoUrl:'',
    webUrl: '',
    describe: ''
  },
  {
    id:2,
    type: 'design',
    logoUrl:'',
    webUrl: '',
    describe: ''
  },
  {
    id:2,
    type: 'design',
    logoUrl:'',
    webUrl: '',
    describe: ''
  },
  {
    id:2,
    type: 'design',
    logoUrl:'',
    webUrl: '',
    describe: ''
  },
  {
    id:2,
    type: 'design',
    logoUrl:'',
    webUrl: '',
    describe: ''
  },
  {
    id:2,
    type: 'design',
    logoUrl:'',
    webUrl: '',
    describe: ''
  },
  {
    id:2,
    type: 'design',
    logoUrl:'',
    webUrl: '',
    describe: ''
  },
  {
    id:2,
    type: 'design',
    logoUrl:'',
    webUrl: '',
    describe: ''
  },
  {
    id:2,
    type: 'design',
    logoUrl:'',
    webUrl: '',
    describe: ''
  },
  {
    id:2,
    type: 'design',
    logoUrl:'',
    webUrl: '',
    describe: ''
  },
  {
    id:2,
    type: 'design',
    logoUrl:'',
    webUrl: '',
    describe: ''
  },
  {
    id:2,
    type: 'design',
    logoUrl:'',
    webUrl: '',
    describe: ''
  },
  {
    id:2,
    type: 'design',
    logoUrl:'',
    webUrl: '',
    describe: ''
  },
  {
    id:2,
    type: 'design',
    logoUrl:'',
    webUrl: '',
    describe: ''
  },
  {
    id:2,
    type: 'design',
    logoUrl:'',
    webUrl: '',
    describe: ''
  },
  {
    id:2,
    type: 'design',
    logoUrl:'',
    webUrl: '',
    describe: ''
  },
  {
    id:2,
    type: 'design',
    logoUrl:'',
    webUrl: '',
    describe: ''
  }
]
</script>