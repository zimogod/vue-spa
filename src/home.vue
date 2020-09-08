<template>
  <div class="home">
    <div class="head"></div>
    <div class="content">
        <div>{{ times }}</div>
        <div>{{ shijian }}</div>
        <van-button type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <van-button type="default">默认按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
    </div>
    <div class="foot"></div>
  </div>
</template>
<script>
import { formateDate,formateTime } from './utils';
export default {
  data(){
      return {
          now:new Date(),
          times:'',
          shijian:''
      }
  },
  mounted(){
      let time = formateDate(this.now);
      let timess = formateTime(this.now,':')
      this.shijian = timess;
      this.times = time;
  }
};
</script>
<style lang="stylus">
.home
  width 100%
  height 100%
  display flex
  justify-content flex-start
  flex-flow column nowrap
  .head
    width 100%
    height 1rem 
    background red
  .content
    width 100%
    flex 1
    background url('./assets/logo.png') no-repeat
  .foot
    width 100%
    height 1rem 
    background red
</style>
