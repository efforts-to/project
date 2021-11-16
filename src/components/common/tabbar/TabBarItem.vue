<template>
  <div class="tab-bar-item" @click="toActive" :style="activeStyle">
    <div v-if="!isActive">
      <slot name="item-icon" ></slot>
    </div>
    <div v-else>
      <slot name="item-active-icon"></slot>
    </div>
    <div>
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    link:{
      type:String
    },
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data(){
    return{
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.link) !== -1
    },
    activeStyle(){
      if (this.isActive){
        return {'color':this.activeColor}
      }
      return {}
    }
  }
  ,
  methods:{
    toActive(){
      this.$router.replace(this.link)
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  /*移动端，tabbar高度一般都是49px*/
  height: 3.0625rem;
  font-size: 0.875rem;
}
.tab-bar-item img{
  margin-top: 0.1875rem;
  height: 1.5rem;
  width: 1.5rem;
  /*vertical-align 用来消除img和div之间的间距*/
  vertical-align: middle;
}
</style>
