<template>
  <div class="login">
    登录页面
    <van-button type="info" @click="login">登录</van-button>
  </div>
</template>
<script>
export default {
  data(){
      return {
          username:'zimo'
      }
  },
  methods:{
      login(){
          sessionStorage.setItem('username',JSON.stringify(this.username));
          this.$router.push({
              path:'/photo-list'
          })
      }
  },
  created(){
      
  }
};
</script>
<style lang="stylus">
    .login
        width 100%
        height 100vh
        background #ccc
</style>
