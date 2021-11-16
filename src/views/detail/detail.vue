<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" class="detail-nav" />
    <bscroll
      class="content"
             ref="scroll"
             @scroll="contentScroll"
             :probe-type="3"
              :pullUpLoad="true"
    >
      <detail-swiper :top-images="swiperItem"></detail-swiper>
      <detail-base-info :goods="goods" :shop-info="shopInfo"/>
      <detail-shop-info :shop-info="shopInfo"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
      <detail-param-info ref="param" :param-info="paramInfo"></detail-param-info>
      <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
      <goods-list ref="recommend" :goods="recommends"/>
    </bscroll>
    <back-top v-show="isShowBackTop" class="back-top" @click.native="backClick" />
    <detail-bottom-bar @addCart="addToCart" />
  </div>
</template>

<script>
import detailNavBar from "./childComps/detailNavBar";
import detailSwiper from "./childComps/detailSwiper";
import detailBaseInfo from "./childComps/detailBaseInfo";
import detailShopInfo from "./childComps/detailShopInfo";
import detailGoodsInfo from "./childComps/detailGoodsInfo";
import detailParamInfo from "./childComps/detailParamInfo";
import detailCommentInfo from "./childComps/detailCommentInfo";
import detailBottomBar from "./childComps/detailBottomBar";
import backTop from "components/content/backTop/backTop";

import {backTopMixin} from "../../common/mixin";

import GoodsList from "components/content/goods/GoodsList";
import bscroll from "components/common/bscroll/bscroll";
import {getDetail,getRecommend,Goods,shopInfo,GoodsParam} from "network/detail";

export default {
  name: "detail",
  created() {
    this.iid=this.$route.params.iid;
    getDetail(this.iid).then((res)=>{
      const data = res.data.result
      //获取轮播图数据
      this.swiperItem = data.itemInfo.topImages

      //获取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);

      //获取店铺数据
      this.shopInfo = new shopInfo(data.shopInfo);

      //保存商品详情数据
      this.detailInfo = data.detailInfo

      //获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

      //获取评论信息
      if(data.rate.cRate !==0){
        this.commentInfo = data.rate.list[0]
      }
    })
    //请求推荐数据
    getRecommend().then((resolve)=>{
      this.recommends = resolve.data.data.list
    })
  },
  data(){
    return{
      iid:null,
      swiperItem:[],
      goods: null,
      shopInfo:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommends:[],
    }
  },
  mixins:[backTopMixin],
  components:{
    detailNavBar,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    detailGoodsInfo,
    detailParamInfo,
    detailCommentInfo,
    detailBottomBar,
    backTop,
    bscroll,
    GoodsList
  },
  methods:{
    titleClick(index) {
      let scroll = this.$refs.scroll;
      switch (index){
        case 0:
            scroll.scrollTo(0,this.themeTopYs[index],500);
          break;
        case 1:
            scroll.scrollTo(0,-this.themeTopYs[index]+44,500)
          break;
        case 2:
            scroll.scrollTo(0,-this.themeTopYs[index]+44,500)
          break;
        case 3:
            scroll.scrollTo(0,-this.themeTopYs[index]+44,500);
          break
        default:
          return false
      }
    },
    contentScroll(positon){
      this.tabOffsetTopShow = (-positon.y)>=this.tabOffsetTop?true:false;
      this.isShowBackTop = (-positon.y)>1000?true:false;
    },
    addToCart(){
      //获取购物车需要展示信息
      const product = {}
      product.image = this.swiperItem[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.realPrice = this.goods.realPrice;
      product.iid = this.iid;
      this.$store.dispatch('addToCart',product)
    }
  },

}
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 9;
  background-color: #ffffff;
}
.detail-nav{
  position: relative;
  z-index: 10;
  background-color: #ffffff;
}
.content{
  height: calc(100vh - 44px - 49px);
}
</style>
