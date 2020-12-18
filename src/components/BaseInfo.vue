<template>
  <div class="base-info2">
    <div class="item" v-for="item in baseInfo2" :key="item.title">
      <el-popover
        :placement="item.placement"
        :title="item.title"
        width="200"
        trigger="hover"
        :content="item.content"
      >
        <span class="span" slot="reference"
          ><i class="iconfont" :class="item.iconName"></i
        ></span>
      </el-popover>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

type BaseInfoTwo = {
    placement: string; title: string; content: string; iconName: string;
}
@Component({})
export default class BaseInfo extends Vue {
  @Prop({required: true, type: Array}) readonly baseInfo2!: BaseInfoTwo[];
}
</script>

<style lang="scss" scoped>
.base-info2{
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  .span{
    text-align: center;
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #444857;
    i{
      font-size: 44px;line-height: 100px;
    }
  }
}
</style>