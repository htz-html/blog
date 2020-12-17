<template>
  <div class="wrapper">
    <div class="box">
      <Search v-if="isSearch"/>
      <div class="content">
        <slot/>
      </div>
    </div>
    <Nav/>
  </div>
</template>
<script lang="ts">
import Nav from '@/components/Nav.vue';
import Search from '@/components/Search.vue';
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  components:{Nav,Search}
})
export default class Layout extends Vue  {
  @Prop(Boolean) readonly isSearch!: boolean;
  // get isSearch (){
  //   console.log(11)
  //   return 
  // }
  created() {
    console.log(this.isSearch)
  }
}
</script>
<style lang="scss" scoped>
.wrapper{
  .box{
    padding-left: 100px;
    > .content {
      width: 1100px;
      margin: 0 auto;
    }
  }
}
</style>