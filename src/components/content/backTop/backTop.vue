<template>
  <div class="backTop" @click="backTop">
    <img src="~assets/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: "backTop",
  methods:{
    backTop(){

    }
  }
}
</script>

<style scoped>
.backTop{
  position: fixed;
  bottom: 49px;
  right: 10px;
  z-index: 9;
}
.backTop img{
  width: 43px;
}
</style>
