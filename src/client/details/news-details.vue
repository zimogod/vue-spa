<template>
  <div class="goods-list">
    新闻详情
    <input type="text" style="width:300px;" v-model="keys">
    <button @click="searchData(keys)">评论</button>
  </div>
</template>
<script>
import { Toast } from 'vant'
import { listObj } from '../../server';
export default {
  data(){
      return {
          keys:'',
          newsid:this.$route.params.newsid
      }
  },
  methods:{
      searchData(keys){
          listObj.pinglun(this.newsid,keys).then(res =>{
              console.log(res)
          })
           Toast.success('评论成功');
      },
      getnewsDetails(){
          listObj.newsDetails(this.newsid).then(res =>{
              console.log(res)
          })
      }
  },
  mounted(){
      console.log(this)
      this.getnewsDetails();
    //   console.log(this.$route.params.newsid)
  }
};
</script>
<style lang="stylus">
.goods-list
  width 100%
  height 100vh
</style>
