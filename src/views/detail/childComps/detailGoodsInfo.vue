<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-list">
    <div class="info-desc clear-fix">
      <div class="start">
      </div>
      <div class="desc">
        {{detailInfo.desc}}
      </div>
      <div class="end">
      </div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index"
           :src="item" @load="imageLoad" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "detailGoodsInfo",
  props:{
    detailInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    imageLoad(){

    }
  }
}
</script>

<style scoped>
.goods-list{
  width: 100%;
}
.goods-list img{
  width: 100%;
}
</style>
