<template>
  <div class="child">
    <div class="list" v-for="(item,index) in list" :key="index">
        {{ item }}
    </div>
  </div>
</template>
<script>
export default {
    props:{
        list:{
            type:Array,
            default:() => []
        }
    },
  data(){
      return {
      }
  }
};
</script>
<style lang="stylus">
.child
  width 100%
  height 3rem
  .list
     width 100%
     height .6rem
     background green
     color #fff
</style>
