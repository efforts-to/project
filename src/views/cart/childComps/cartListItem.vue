<template>
  <div id="shop-item">
    <div class="item-selector">
      <check-button :is-checked="product.checked" @click.native="checkClick" />
    </div>
    <div class="item-img">
      <img :src="product.image" alt="">
    </div>
    <div class="item-info">
      <div class="item-title">
        {{product.title}}
      </div>
      <div class="item-desc">
        {{product.desc}}
      </div>
      <div class="info-bottom">
        <div class="item-price">
          {{product.realPrice}}
        </div>
        <div class="item-count">
          {{product.count | formatCount}}
        </div>
      </div>

    </div>
  </div>

</template>

<script>

import checkButton from "./checkButton";

export default {
  name: "cartListItem",
  props:{
    product:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    formatCount(par){
      return 'X'+par;
    }
  },
  components:{
    checkButton
  },
  methods:{
    checkClick(){
      this.product.checked = !this.product.checked;
    }
  }

}
</script>

<style scoped>
#shop-item{
  height: 120px;
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

.item-selector{
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.item-title,
.item-desc{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img{
  padding: 5px;
}
.item-img img{
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}
.item-info{
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
  width: 270px;
  box-sizing: border-box;
}
.item-info,
.item-desc{
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}
.info-bottom{
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
  display: flex;
  justify-content: space-between;
}
.info-bottom .item-price{
  color: orangered;
}
</style>
