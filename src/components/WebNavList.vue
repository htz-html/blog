<template>
  <ul>
    <li v-for="item in DesignWeb" :key="item.id" @click="gotoWeb(item.webUrl)">
      <img v-if="item.logoUrl" :src="item.logoUrl">
      <h2 v-else>{{item.name}}</h2>
      <p>{{item.describe}}</p>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  components:{},
})
export default class WebNavList extends Vue {
  @Prop(Array) readonly DesignWeb!: [];
  gotoWeb(url: string){
    window.open(url)
  }
}
</script>
<style lang="scss" scoped>
$borderradius4:4px;
ul{
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-left: -10px;
  margin-right: -10px;
  >li{
    width: 260px;
    padding: 20px;
    margin: 10px;
    background: #1F2026;
    box-sizing: border-box;
    border-radius: $borderradius4;
    transition: all .3s;
    >img{
      height: 32px;
    }
    >p{
      margin-top: 10px;
    }
  }
  >li:hover{
    cursor: pointer;
    background: #353741;
  }
}
</style>