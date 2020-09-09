<template>
  <div class="photo">
    <div v-for="item in sortList" :key="item.id">
        <div>{{ item.title }}</div>
        <img :src="item.img_url" />
    </div>
  </div>
</template>
<script>
export default {
    props:{
        sortList:{
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
.photo
  width 100%
  height 100vh
  font-size 14px
  margin-top: 2rem;
</style>
