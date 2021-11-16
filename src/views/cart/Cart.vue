<template>
  <div class="cart">

<!--    导航      -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>

    <!--商品列表-->
    <cart-list></cart-list>


<!--    底部汇总    -->
    <cart-bottom-bar/>

  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";


import cartList from "./childComps/cartList";
import cartBottomBar from "./childComps/cartBottomBar";

import {mapGetters} from 'vuex'

export default {
  name: "Cart",
  components:{
    NavBar,
    cartList,
    cartBottomBar
  },
  computed:{
    ...mapGetters([
      'cartLength'
    ])
  }
}
</script>

<style scoped>
.cart{
  height: 100vh;
}
.nav-bar{
  background-color: var(--color-high-text);
  color: #ffffff;
  z-index: 999;
  position: relative;
}

</style>
