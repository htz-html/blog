import { componentInit } from './component'
import { VueConstructor } from 'vue/types/umd';

export const vueInit = (vm: VueConstructor<Vue>)=>{
  componentInit(vm);
}