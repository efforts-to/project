<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="test">客服</span>
      </div>
      <div>
        <i class="icon service"></i>
        <span class="test">店铺</span>
      </div>
      <div>
        <i class="icon service"></i>
        <span class="test">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailBottomBar",
  methods:{
    addToCart(){
      this.$emit("addCart")
    }
  }
}
</script>

<style scoped>
.bottom-bar{
  width: 100%;
  height: 49px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}
.bar-item{
  display: flex;
  text-align: center;
  line-height:49px;
}
.bar-left{
  flex: 1.3;
}
.bar-left div{
  flex: 1;
}
.bar-right{
  flex: 1;
}
.bar-right div{
  width: 50%;
}
.bar-right .cart{
  background-color: rgb(255,233,22);
}
.bar-right .buy{
  background-color: var(--color-high-text);
  color: #ffffff;
}

</style>
