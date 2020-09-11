<template>
    <div class="list">
        <div class="list-item" v-for="(item, index) in listdata" :key="index">
            <div class="item-name">
                <van-icon :name="item.icon" />
                <span>{{item.name}}</span>
            </div>
            <!-- 只加一个判断，如果当前item中还有children选项，继续调用自身组件 -->
            <div v-if="item.children" class="children-item">
                <!-- 调用自身了，递归了 -->
                <list :listdata="item.children"></list>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "list",
  props: ['listdata'],
};
</script>

<style lang="stylus">
.list
  width 100%
  height auto
  .list-item
     width 100%
     heigh .4rem
     padding-left .2rem
     .item-name 
        height .4rem
         
</style>




