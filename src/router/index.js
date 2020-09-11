import Vue from "vue";
import VueRouter from "vue-router";

import { Toast } from 'vant';

Vue.use(Toast);

// 解决报错
// const originalPush = Router.prototype.push;
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../home.vue"),
  },
  {
    path: "/new-list",
    name: "new-list",
    component: () => import("../client/home/new-list.vue"),
  },
  {
    path: "/new-list-details/:newsid",
    name: "new-list-details",
    component: () => import("../client/details/news-details.vue"),
    // 路由独享钩子函数 进入当前组件前进行拦截
    beforeEnter:(to,from,next)=>{
      if(to.path == '/new-list-details/14'){
        Toast({
          message: '会员才可进入',
          forbidClick: true,
          icon: 'clear',
        });
        next(false); // 拦截到当前组件
      } else{
        // 其他组件放行
        next();
      }
    }
  },
  {
    path: "/photo-list",
    name: "photo-list",
    component: () => import("../client/home/photo-list.vue"),
    // 用到权限或者路由拦截时，写路由元信息  meta对象
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/goods-list",
    name: "goods-list",
    component: () => import("../client/home/goods-list.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../callback/login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// 进入图片列表我进行路由拦截 全局前置守卫
router.beforeEach((to,from,next) =>{
  // 1、先判断photo-list组件路由元信息是否允许   
  // if 拦截 看看判断条件是都成立  成立了在if 放行 ，否则拦截 去你想去的组件
  // else 不用拦截了，放行当前组件 
  if(to.matched.some(res => res.meta.requireAuth)){
    // 2、判断你是否登录了，如果登录了 放行
    if(sessionStorage.getItem('username')){
      next();
    }else{
      // 提示
      Toast({
        message: '未登录...',
        icon: 'fail',
        forbidClick:true,
        duration:2500
      });
      // JS中事件循环 
      setTimeout(() =>{
        next({path:'/login'})
        // next(false) 拦截到当前组件
      },2500);
    }
  }else{
    // 当前组件放行  不拦截当前组件 
    next()
  }
});

// 全局后置守卫  离开提示  是否保存 
// router.afterEach((to,from) =>{
//   if(to.path == '/goods-list'){
//     confirm('你确定要离开吗？')
//   }
// })

// 进入图片列表进行登录拦截
// router.beforeEach((to, from, next) => {
//   if (to.matched.some((res) => res.meta.requireAuth)) {
//     // 判断是否需要登录权限
//     if (sessionStorage.getItem("username")) {
//       // 判断是否登录
//       next();
//     } else {
//       // 没登录则跳转到登录界面
//       // alert('您还没有登录')
//       Toast.loading({
//         message: '您未登录...',
//         forbidClick: true,
//       });
//       setTimeout(() =>{
//         next({
//           path: "/login",
//         });
//       },2500)
//     }
//   } else {
//     next();
//   }
// });

export default router;
