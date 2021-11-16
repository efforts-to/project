<template>
<!--  本周流行-->
  <div class="feature">
    <a href="https://act.mogujie.com/zzlx67">
      <img src="~assets/img/home/popular_bg.jpg" alt="">
    </a>
  </div>
</template>

<script>
export default {
  name: "Feature",
  props:{
    data:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.feature{
  width: 100%;
}
.feature img{
  width: 100%;
}
</style>
