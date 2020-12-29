<template>
  <Layout :isSearch="isSearch">
    <div class="article-item" style="overflow:auto;height: 100vh;">
    <ul
      class="list"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled">
      <li v-for="item in list" :key="item.id" @click="goArticleDetail(item)">
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
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components:{},
})
export default class Home extends Vue {
  count=12;
  loading= false;
  list = [] as any [];
  isSearch = this.$route.meta.isSearch;
  get noMore(){
    return this.count >= this.articlesData.length
  }
  get disabled(){
    return this.loading || this.noMore
  }
  articlesData = []
  created() {
    this.articlesData = this.$store.state.dataArticle;
    this.list = this.articlesData.slice(0,this.count);
  }
  load () {
    this.loading = true;
    const moreData = this.articlesData.slice(this.count, this.count+2)
    setTimeout(() => {
      moreData.forEach(item=>{
        this.list.push(item)
      })
      this.count += 2
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
}
</script>

<style lang="scss">
@keyframes rotate{
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
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
.article-item{
  margin-top: 120px;
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