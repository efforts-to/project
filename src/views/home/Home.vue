<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">
        购物街
      </div>
    </nav-bar>
    <tab-control
      @tabControlClick="tabClick"
      v-show="tabOffsetTopShow"
      :titles="titles"
      ref="tabControl-top"
    />
<!--    滑动-->
    <bscroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
      <recommend-view :recommends="recommends" />
      <feature />
      <tab-control
        @tabControlClick="tabClick"
        :titles="titles"
        v-show="!tabOffsetTopShow"
        ref="tabControl-content"
      />
      <goods-list :goods="showGoods" />
    </bscroll>
    <back-top v-show="isShowBackTop" class="back-top" @click.native="backClick" />
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import Feature from "./childComps/Feature";
import GoodsList from "components/content/goods/GoodsList";

import NavBar from "components/common/navbar/NavBar";
import tabControl from "components/content/tabControl/tabControl";
import bscroll from "components/common/bscroll/bscroll";


import {backTopMixin} from "../../common/mixin";
import {
  getHomeMultidata,
  getHomeGoods
} from "network/home";


export default {
  name: "Home",
  data(){
    return{
      banners:[],
      recommends:[],
      titles:['流行','新款','精品'],
      goods:{
        "pop":{page:0,list:[]},
        "new":{page:0,list:[]},
        "sell":{page:0,list:[]}
      },
      currentType:'pop',
      tabOffsetTop:0,
      tabOffsetTopShow:false
    }
  },
  mixins:[backTopMixin],
  components:{
    HomeSwiper,
    RecommendView,
    Feature,
    GoodsList,

    NavBar,
    tabControl,
    bscroll
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  mounted() {

  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  methods:{
    /**
     *事件方法
     */
    tabClick(index){
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      //解决两个tabControl中的，不同步的问题，个人理解，是因为组件中，data是一个函数，所以currentIndex属性不共用，
      // 导致同一个组件，多次使用，但是数据不互通
      this.$refs["tabControl-top"].currentIndex = index;
      this.$refs["tabControl-content"].currentIndex = index
    },
    contentScroll(positon){
      this.tabOffsetTopShow = (-positon.y)>=this.tabOffsetTop?true:false;
      this.isShowBackTop = (-positon.y)>1000?true:false;
    },
    loadMore(){
      this.getHomeGoods(this.currentType,this.goods[this.currentType].page)
    },
    swiperImageLoad(){
      //$el属性，用来获取组件中的正常html元素
      this.tabOffsetTop = this.$refs["tabControl-content"].$el.offsetTop
    },
    /**
     * 网络请求相关方法
     */
    getHomeMultidata(){
      getHomeMultidata().then((res)=>{
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page+1;
      getHomeGoods(type,page).then((res)=>{
        this.goods[type].list = [...this.goods[type].list,...res.data.data.list];
        this.goods[type].page++;
        this.$refs.scroll.finishPullUp();
      })
    }
  }
}
</script>

<!--style中加入scoped 意味这些样式只会对当前文件有效果-->
<style scoped>
.home-nav{
  background-color: var(--color-high-text);
  color: #ffffff;
  position: relative;
  z-index: 9;
}
#home{
  height: 100vh;
  position: relative;
}
.content{
  position: relative;
  height: calc(100% - 150px);
}

</style>
