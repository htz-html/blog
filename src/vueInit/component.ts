import { Button, Input } from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";
import { VueConstructor } from 'vue/types/umd';

export const componentInit = (vm: VueConstructor) => {
  vm.use(Button)
  vm.use(Input)
}







