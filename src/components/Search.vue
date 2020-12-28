<template>
  <div class="search">
    <el-autocomplete
      popper-class="my-autocomplete"
      v-model="state"
      :fetch-suggestions="querySearch"
      placeholder="请搜索关键词"
      @select="handleSelect"
      class="input"
      prefix-icon="iconfont iconsearch"
    >
      <template slot-scope="{ item }">
        <div class="name">{{ item.value }}</div>
      </template>
    </el-autocomplete>
    <div class="search-btn">
      <el-button type="success">搜 索</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class Search extends Vue {
  restaurants=[{}];
  state="";
  querySearch(queryString: any, cb: any) {
    const restaurants = this.restaurants;
    const results = queryString
      ? restaurants.filter(this.createFilter(queryString))
      : restaurants;
      // 调用 callback 返回建议列表的数据
    cb(results);
  }
  createFilter(queryString: any) {
    return (restaurant: any) => {
      return (
        restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
      );
    };
  }
  loadAll() {
    return [
      { value: "" },
    ];
  }
  handleSelect(item: any) {
    console.log(item);
  }
  handleIconClick(ev: any) {
    console.log(ev);
  }
  mounted() {
    this.restaurants = this.loadAll();
  }
}
// export default {
//   props:["searchData"],
//   data() {
//     return {
//       restaurants: [],
//       state: "",
//     };
//   },
//   methods: {
//     querySearch(queryString, cb) {
//       const restaurants = this.restaurants;
//       const results = queryString
//         ? restaurants.filter(this.createFilter(queryString))
//         : restaurants;
//       // 调用 callback 返回建议列表的数据
//       cb(results);
//     },
//     createFilter(queryString) {
//       return (restaurant) => {
//         return (
//           restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
//           0
//         );
//       };
//     },
//     loadAll() {
//       return [
//         { value: "" },
//       ];
//     },
//     handleSelect(item) {
//       console.log(item);
//     },
//     handleIconClick(ev) {
//       console.log(ev);
//     },
//   },
//   mounted() {
//     this.restaurants = this.loadAll();
//     console.log(this.searchData)
//   },
// };
</script>
<style lang="scss" >
$searchFontS:500;
$inputColor: white;
$inputIcon:#444857;
$borderRadius: 4px;
$inputHeight:48px;
$inpBtn:18px;
.search {
  padding: 30px 50px;
  display: flex;
  > .input{
    flex: 1;
    >.el-input > input{
      background: #252830 !important;
      min-height: $inputHeight;
      border: none;
      font-size: $inpBtn;
      font-weight: $searchFontS;
      padding-left: 50px;
      font-style: normal !important;
      color:$inputColor !important;
      border-radius: $borderRadius;
    }
    i {
      font-weight: $searchFontS;
      font-size: 24px;
      margin-left: 15px;
      color: $inputIcon;
      line-height: $inputHeight;
    }
  }
  > .search-btn {
    width: 120px;
    text-align: right;
    > button{
      width: 100px;
      height: $inputHeight;
      font-size: $inpBtn;
      background: #47CF74;
      color:#121417;
      font-weight: $searchFontS;
      border-radius: $borderRadius;
    }
  }
}
</style>
<style lang="scss" scoped>
.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;
    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }
    .highlighted .addr {
      color: #ddd;
    }
  }
}
</style>