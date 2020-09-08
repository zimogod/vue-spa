<template>
  <div class="goods-list">
    新闻详情
  </div>
</template>
<script>
import { listObj } from '../../server';
export default {
  data(){
      return {
          newsid:this.$route.params.newsid
      }
  },
  methods:{
      getnewsDetails(){
          listObj.newsDetails(this.newsid).then(res =>{
              console.log(res)
          })
      }
  },
  mounted(){
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
