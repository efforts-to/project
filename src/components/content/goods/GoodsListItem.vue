<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImage"  alt="" @load="imgSucc">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price | rePrice}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: "GoodsListItem",
  props:{
    goodsItem:{
      type:Object,
      default(){
        return {};
      }
    }
  },filters:{
    rePrice(price){
      return "￥"+price;
    }
  },
  methods:{
    itemClick(){
      if(this.$route.path.indexOf('detail') === -1){
        this.$router.push("/detail/"+this.goodsItem.iid)
      }
    },
    imgSucc(){
      
    }
  },
  computed:{
    showImage(){
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  data(){
    return{
      timer:null
    }
  }


}
</script>

<style scoped>
.goods-item{
  width: 48%;
  padding-bottom: 40px;
  position: relative;
}
.goods-item img{
  width: 100%;
  border-radius: 5px;
}
.goods-info{
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods-info .price{
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect{
  position: relative;
}
.goods-info .collect::before{
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/common/favor.png") 0 0/14px 14px;
}
</style>
