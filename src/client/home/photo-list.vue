<template>
  <div class="photo-list">
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
        view:'comA'
      }
  },
  components:{comA},
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
  .nav 
    width 6rem
    height .4rem
    span  
      font-size 14px
</style>
