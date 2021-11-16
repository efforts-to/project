<template>
  <div class="shop-info">
    <div class="shop-name">
      <img :src="shopInfo.shopLogo" alt="">
      <span>{{shopInfo.shopName}}</span>
    </div>
    <div class="shop-data">
      <div class="data-left">
        <div class="sales">
          <p>{{shopInfo.cSells | sales}}</p>
          <p>总销量</p>
        </div>
        <div class="dotey">
          <p>{{shopInfo.cGoods}}</p>
          <p>宝贝</p>
        </div>
      </div>
      <div class="data-right">
        <p v-for="item in shopInfo.score">
          <span class="tag">{{item.name}}</span>
          <span class="score">{{item.score}}</span>
          <span :class="getStyle(item.isBetter)"></span>
        </p>
      </div>
    </div>
    <div class="shop-enter">
      <a :href="shopInfo.shopUrl">进店逛逛</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailShopInfo",
  props:{
    shopInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    sales(sales){

    }
  },
  methods:{
    getStyle(isBetter){
      if(isBetter){
        return 'style-better'
      }else{
        return 'style-bad'
      }
    }
  }
}
</script>

<style scoped>
.shop-info{
  padding: 40px 20px;
}
.shop-name{
  display: flex;
  align-items: center;
}
.shop-name img{
  display: block;
  min-width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0 0 5px 5px #f0f0f0;
  margin-right: 20px;
}
.shop-name span{
  font-size: 16px;
}
.shop-data{
  padding: 40px 0px;
  display: flex;
  flex-direction: row;
}
.shop-data .data-left,
.shop-data .data-right{
  flex: 1;
}

.shop-data .data-left{
  border-right: 1px solid #eeeeee;
}
.data-left{
  display: flex;
  align-items: center;
}
.data-left>div{
  text-align: center;
  flex: 1;
  font-size: 20px;
  font-weight: 500;
}
.data-left div p:nth-child(2){
  font-size: 10px;
  font-weight: 500;
}
.shop-data .data-right p{
  padding: 0 20px;
  display: flex;
  font-size: 14px;
}
.shop-data .data-right p span{
  flex: 1;
}
.shop-data .data-right p span:nth-child(1){
  flex: 2;
}
.shop-enter{
  text-align: center;
  padding: 20px;
}
.shop-enter a{
  display: block;
  min-width: 65%;
  height: 40px;
  line-height: 40px;
  border: 1px solid #333333;
  border-radius: 10px;
}
.style-better,
.style-bad{
  color: #ffffff;
  text-align: right;
}
.style-better{

}
.style-better::before{
  content: "高";
  height: 100%;
  background-color: green;
}
.style-bad{

}
.style-bad::after{
  content: "低";
  height: 100%;
  background-color: red;
}
</style>
