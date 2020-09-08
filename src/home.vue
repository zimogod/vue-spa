<template>
  <div class="home">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
    />
    <div class="loop">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image.img" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div>
        <van-grid :column-num="3">
          <router-link v-for="(value,index) in links" :to="{path:value.path}" :key="index">
            <van-grid-item :icon="value.icon" :text="value.alias" />
          </router-link>
        </van-grid> 
    </div>
    
  </div>
</template>
<script>
import { listObj } from './server';
import { formateDate,formateTime } from './utils';
export default {
  data(){
      return {
        links:[
          {
            path:'/new-list',
            icon:'location-o',
            alias:'新闻资讯'
          },
          {
            path:'/photo-list',
            icon:'coupon-o',
            alias:'图片分享'
          },
          {
            path:'/goods-list',
            icon:'shopping-cart-o',
            alias:'商品列表'
          },
        ],
        // routes:this.$router.options.routes[0].children,
        images: [],
        active:0
      }
  },
  methods:{
    // 获取轮播图数据接口
    getNewsLoop(){
      listObj.getLoopNews().then(res=>{
        this.images = res;
      })
    }
  },
  mounted(){
      this.getNewsLoop();
  } 
};
</script>
<style lang="stylus">
.home
  width 100%
  height 100vh
  .van-nav-bar
    height .8rem
    background skyblue
  .loop
    width 100%
    height 2rem
    .van-swipe
      width 100%
      height 100%
      .van-swipe-item
        width 100%
        height 100%
        img
          width 100%
          height 100%
</style>
