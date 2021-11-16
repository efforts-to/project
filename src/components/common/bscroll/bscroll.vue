<template>
<!-- 封装better-scroll实现滑动-->
  <div class="scroll-wrapper" ref="scroll-wrapper">
    <div class="scroll-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"

export default {
  name: "bscroll",
  data(){
    return{
      BScroll:null,
    }
  },
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default: false
    }
  },
  mounted() {
    //创建better-scroll对象
    this.BScroll = new BScroll(this.$refs["scroll-wrapper"],{
      scrollbar: false,
      observeImage:true,
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    })
    //监听scroll事件
    this.BScroll.on("scroll",(positon)=>{
      this.$emit('scroll',positon)
    })
    if(this.probeType){
      this.BScroll.on("pullingUp",()=>{
        this.$emit("pullingUp")
      })
    }
  },
  methods:{
    scrollTo(x,y,time=300){
      this.BScroll.scrollTo(x,y,time);
    },
    finishPullUp(){
      this.BScroll.finishPullUp();
    },
    saveY(){
      console.log(this.BScroll.getScrollY);
    }
  }
}
</script>

<style scoped>

</style>
