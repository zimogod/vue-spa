<template>
  <div class="photo-list">
    <div>{{ test }}</div>
    <div class="nav">
      <span v-for="item in list" :key="item.id" @click="getSortPicture(item.id)">{{item.title}}</span>
    </div>
    <div>
    <!-- 第一种实现方式 -->
      <com-a :sortList="sortList"></com-a>
    <!-- 第二种实现方式 -->
      <!-- <component :is="view" :sortList="sortList"></component> -->
    </div>
  </div>
</template>
<script>
import { listObj } from '../../server';
import comA from './photo';
export default {
  data(){
      return {
        list:[],
        sortList:[],
        view:'comA',
        test:'我是A',
        timer:null
      }
  },
  components:{comA},
  //当进入组件之前，执行 beforRouteEnter 路由钩子函数
  beforeRouteEnter(to, from, next) {
    console.log("beforRouteEnter",to);
    console.log(this); // 结果为undefined，因为在执行beforRouteEnter时候，组件还没有被创建出来；先执行beforRouteEnter，再执行beforeCreate
      next((vm) => {
      //参数vm就是当前组件的实例。
      vm.timer = setInterval(() =>{vm.test = "我被改变成了B";console.log(2)},1000)
    });
  },
  // 组件内部 如果有二级导航，路由变化了执行
  beforeRouteUpdate(to, from, next) {
    console.log("路由更新了");
    next();
  },
  beforeRouteLeave(to, from, next) {
    //离开组件的时候触发
    //什么都不写的时候，不会离开(走下一步)
    window.clearInterval(this.timer) //清除定时器
    next();
  },
  methods:{
    getPictureNav(){
      listObj.getPhotoPicture().then(res =>{
        res.message.unshift({title:'全部',id:0});
        this.list = res.message;
        this.sortList = res.message;
      })
    },
    getSortPicture(id){
      listObj.getPhotoPictureSort(id).then(res =>{
        this.sortList = res.message;
      })
    }
  },
  mounted(){
    this.getPictureNav();
    // 初始化图片分类
    this.getSortPicture(0);
  }
};
</script>
<style lang="stylus">
.photo-list
  width 100%
  height 100vh
  a
    font-size 18px
  .nav 
    width 6rem
    height .4rem
    span  
      font-size 14px
</style>
