import "element-ui/lib/theme-chalk/index.css";
import { VueConstructor } from 'vue/types/umd';
import { 
  Button, 
  Input, 
  Autocomplete,
  Pagination,
  Card,
  Image,
  InfiniteScroll
} from 'element-ui';

export const componentInit = (vm: VueConstructor) => {
  vm.use(Button)
  vm.use(Input)
  vm.use(Autocomplete)
  vm.use(Pagination)
  vm.use(Card)
  vm.use(Image)
  vm.use(InfiniteScroll)
}







