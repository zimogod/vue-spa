<template>
  <div class="news-list">
    <van-card
        v-for="item in list"
        :key="item.id"
        :desc="item.zhaiyao"
        :title="item.title"
        :thumb="item.img_url"
        @click="newDetails(item.id)"
        >
        <template #bottom>
            <span>创建时间：{{ item.add_time | sliceTime }}</span>
            <span>点击次数：{{ item.click }}</span>&nbsp;&nbsp;
             <span>ID：{{ item.id }}</span>
        </template>
    </van-card>
  </div>
</template>
<script>
// import { formateDate } from '../../utils';
import { listObj } from '../../server';
export default {
  data(){
      return {
          list:[]
      }
  },
  filters:{
      formateDate(time){
          let years = time.getFullYear();
          let month = time.getMonth() + 1;
          let day = time.getDate();
          return `${years}-${month}-${day}`
      },
      sliceTime(value){
        return value.slice(0,10)
      }
  },
  methods:{
      getnews(){
          listObj.getnews().then(res =>{
            this.list = res.message;
          })
      },
      newDetails(id){
          this.$router.push({
              name:'new-list-details',
              params:{newsid:id}
          })
      }
  },
  mounted(){
      this.getnews();
  }
};
</script>
<style lang="stylus">
.news-list
  width 100%
  height 100vh
</style>
