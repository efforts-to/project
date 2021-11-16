<template>
  <div class="tabControl">
    <div v-for="(item,index) in titles"
         class="tabControl-item"
         :class="{active:index === currentIndex}"
         @click="Control(index)"
    >
      <span >{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabControl",
  data(){
    return{
      currentIndex:0
    }
  },
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    Control(index){
      this.currentIndex = index;
      this.$emit('tabControlClick',index);
    }
  }
}
</script>

<style scoped>
.tabControl{
  position: relative;
  background-color: #ffffff;
  z-index: 8;
  display: flex;
  justify-content: space-around;
  line-height: 40px;
}
.tabControl-item{
  font-size: 15px;
  height: 40px;
}
.tabControl-item span{
  padding: 0 5px;
}
.active{
  color: var(--color-height-text);
  border-bottom: 2px solid var(--color-tint);
}
</style>
