<template>
  <div class="cart-list">
    <bscroll
      class="content"
      :probe-type="0"
    >
        <cart-list-item
          v-for="(item,index) in cartList"
          :product="item"
          :key="index"
        >
        </cart-list-item>
    </bscroll>
  </div>
</template>

<script>


import bscroll from "components/common/bscroll/bscroll";
import cartListItem from "./cartListItem";

import {mapGetters} from "vuex";

export default {
  name: "carList",
  computed:{
    ...mapGetters([
      'cartList'
    ])
  },
  components:{
    bscroll,
    cartListItem
  },
  methods:{
    
  }
}
</script>

<style scoped>
.cart-list{
  height: calc(100% - 44px - 49px - 49px);
  overflow: hidden;
}
.content{
  height: 100%
}
</style>
