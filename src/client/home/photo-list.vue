<template>
  <div class="photo-list">
    <div class="nav">
      <span v-for="item in list" :key="item.id" @click="getSortPicture(item.id)">{{item.title}}</span>
    </div>
    <div>
      <!-- <component></component> -->
    </div>
  </div>
</template>
<script>
import { listObj } from '../../server';
export default {
  data(){
      return {
        list:[]
      }
  },
  methods:{
    getPictureNav(){
      listObj.getPhotoPicture().then(res =>{
        res.message.unshift({title:'全部',id:0});
        this.list = res.message;
      })
    },
    getSortPicture(id){
      listObj.getPhotoPictureSort(id).then(res =>{
        console.log(res)
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
