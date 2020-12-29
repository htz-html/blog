<template>
  <Layout :isSearch="isSearch">
    <div class="article">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane 
          v-for="item in typeList" 
          :key="item+Math.random()" 
          :label="item" :name="item">
          <div  class="article-item" style="overflow:auto;height: 100vh;">
            <ul
              class="list"
              v-infinite-scroll="load"
              infinite-scroll-disabled="disabled">
              <li v-for="item in firstList" :key="item.id" @click="goArticleDetail(item)">
                <div class="top text">
                  <h2 class="ellipsis-2">{{item.title}}</h2>
                  <div class="describe ellipsis-2">{{item.describe}}</div>
                </div>
                <div class="bottom">
                  {{item.user}} · {{item.time}} · {{item.type}}
                </div>
              </li>
            </ul>
            <div class="loading">
              <p v-if="loading" class="rotate"><i class="iconfont iconloading"></i></p>
              <p v-if="noMore">没有更多了</p>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
  </div>
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components:{},
})
export default class Home extends Vue {
  count=6;
  loading= false;
  list = [] as any [];
  firstList=[] as any [];
  isSearch = this.$route.meta.isSearch;
  allArticlesData = [];
  typeList=[];
  activeName='';

  get noMore(){
    return this.count >= this.list.length
  }
  get disabled(){
    return this.loading || this.noMore
  }
  created() {
    this.allArticlesData = this.$store.state.dataArticle;
    this.getTypes()
    this.filterTypeData(this.activeName)
    this.firstList = this.list.slice(0,this.count);
  }
  load () {
    this.loading = true;
    const moreData = this.list.slice(this.count, this.count+5)
    setTimeout(() => {
      moreData.forEach(item=>{
        this.firstList.push(item)
      })
      this.count += 5
      this.loading = false
    }, 2000)
  }
  goArticleDetail(item: any){
    if(item.artUrl){
      window.open(item.artUrl, '_blank')
    }else{
      this.$router.push({path: "pagedetail", query:{id: item.id}})
    }
  }
  handleClick(tab: any) {
    this.list = []
    this.filterTypeData(tab.name)
    this.firstList = this.list.slice(0,this.count);
  }
  getTypes(){
    const typeAll: any = []
    this.allArticlesData.forEach((item: any)=>{
      typeAll.push(item.type)
    })
    this.typeList = Array.from(new Set(typeAll));
    this.activeName = this.typeList[0]
  }
  filterTypeData(tab: string){
    this.list = this.allArticlesData.filter((item: any) => (item.type === tab))
  }
}
</script>
<style lang="scss">
@keyframes rotate{
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
}
.article{
  .el-tabs__header{
    margin: 0;
    background: #32343d;
    padding: 0 20px;
    border-radius: 5px 5px 0 0;
  }
  .el-tabs__nav-wrap::after{
    width: 0;
  }
  .el-tabs__item{
    font-size: 18px;
    height: 60px;
    line-height: 60px;
    color: #aaa;
    &.is-active{
      color:#47CF74;
    }
  }
  .el-tabs__active-bar{
    background-color: #47CF74;
  }
  
}
.article-item{
  .loading {
    text-align: center;
    p{
      display: inline-block;
      padding: 20px 0;
    }
    .rotate{
      transform-origin: 8px 30px;
      animation: rotate .5s linear infinite;
    }
  }
}
//隐藏滚动条
.article-item::-webkit-scrollbar {
  display: none;
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
.article{
  margin-top: 50px;
}
.article-item{
  > ul {
    >li {
      background: #1F2026;
      border-bottom: 1px solid #383d49;
      cursor: pointer;
      .text>.describe{
        margin-top: 10px;
        color: #ccc;
        font-size: 16px;
      }
      .text>h2{
        font-size: 24px;
      }
      .top.text{
        padding: $textPadding;
      }
      .bottom{
        padding: 0 20px 20px;
        color: #888;
      }
    }
    >li:hover{
      background: #272930;
    }
  }
}

</style>