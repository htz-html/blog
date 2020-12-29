<template>
  <Layout class="detaile">
  </Layout>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";
@Component({
  name:"WebNav",
  components:{},
})
export default class ArticleDetail extends Vue {
  pageId = null;
  page = [];
  created() {
    this.pageId = +this.$route.query.id;
    this.page = this.filterData()
  }
  filterData(){
    return this.DetailData.filter(item => item.id === this.pageId)
  }
DetailData = [

];
}
</script>
<style lang="scss">
.pre{
  border-radius: 10px;
  background:#252830 !important;
  font-size:16px;
}

.code{
  display: block; overflow-x: auto; 
  padding: 10px 20px 20px 40px;
  line-height: 24px;
}
.h2{
  margin-top: 20px;
  font-size: 28px;
}
.danger{
  color: rgb(255, 43, 142);
}
</style>
<style lang="scss" scoped>
.detaile{
  margin-top: 240px;
  padding-bottom: 50px;
}
</style>