<template>
<div class="mainTabBar">
  <tab-bar>
    <tab-bar-item link="/Home">
      <img src="~assets/img/tabbar/home.svg" slot="item-icon" alt="">
      <img src="~assets/img/tabbar/home_active.svg" slot="item-active-icon" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/Category">
      <img src="~assets/img/tabbar/category.svg" slot="item-icon" alt="">
      <img src="~assets/img/tabbar/category_active.svg" slot="item-active-icon" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item link="/Cart">
      <img src="~assets/img/tabbar/shopcart.svg" slot="item-icon" alt="">
      <img src="~assets/img/tabbar/shopcart_active.svg" slot="item-active-icon" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item link="/Profile">
      <img src="~assets/img/tabbar/profile.svg" slot="item-icon" alt="">
      <img src="~assets/img/tabbar/profile_active.svg" slot="item-active-icon" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</div>
</template>

<script>

import TabBar from 'components/common/tabbar/TabBar';
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "mainTabBar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
.mainTabBar{
  position: relative;
  z-index: 9;
}
</style>
