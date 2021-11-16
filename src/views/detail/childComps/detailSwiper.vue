<template>
  <div class="detail-swiper">
    <swiper  class="swiper-item">
      <swiper-item v-for="(item,index) in topImages">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>

import {Swiper,SwiperItem} from "components/common/swiper"
export default {
  name: "detailSwiper",
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.swiper-item{
  height: 400px;
  overflow: hidden;
}
</style>
