import "element-ui/lib/theme-chalk/index.css";
import { VueConstructor } from 'vue/types/umd';
import { 
  Button, 
  Input, 
  Autocomplete,
  Avatar
} from 'element-ui';

export const componentInit = (vm: VueConstructor) => {
  vm.use(Button)
  vm.use(Input)
  vm.use(Autocomplete)
  vm.use(Avatar)
}







