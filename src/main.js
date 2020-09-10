import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button,
  NavBar,
  Swipe, 
  SwipeItem,
  Lazyload,
  Toast,
  Tabbar, 
  TabbarItem,
  Grid, 
  GridItem,
  Card,
  Icon,
  Tag
  } from 'vant';
Vue.use(Card);
Vue.use(Icon);
Vue.use(Toast);
Vue.use(Tag);
Vue.use(Button);
Vue.use(NavBar);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
