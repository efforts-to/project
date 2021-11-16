<template>
    <div class="detail-info" v-if="goods !== null">
      <div class="detail-title">{{goods.title}}</div>
      <div class="detail-price">
        <span class="newPrice">{{goods.newPrice}}</span>
        <span class="oldPrice">{{goods.oldPrice}}</span>
        <span class="discount" v-show="goods.discount !== ''">{{goods.discount}}</span>
      </div>
      <div class="detail-columns">
        <span>{{goods.columns[0]}}</span>
        <span>{{goods.columns[1]}}</span>
        <span>{{goods.service[goods.service.length-1].name}}</span>
      </div>
      <div class="detail-logistics">
        <span v-for="index in goods.service.length-1">
          <img :src="goods.service[index-1].icon" alt="" />
          <span>{{goods.service[index-1].name}}</span>
        </span>
      </div>
    </div>

</template>

<script>
export default {
  name: "detailBaseInfo",
  data(){
    return {
    }
  },
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.detail-info{
  padding: 10px;
  font-size: 18px;
  border-bottom: 5px solid #eeeeee;
}
.detail-title{
  color: #333;
  font-size: 18px;
  font-weight: 500;
}
.detail-info>div{
  margin-top: 10px;
}
.detail-info .detail-price .newPrice{
  font-size: 28px;
  color: var(--color-high-text);
  margin-right: 5px;
}
.detail-info .detail-price .oldPrice{
  color: #cccccc;
  text-decoration: line-through;
  margin-right: 5px;
}
.detail-info .detail-price .discount{
  padding: 5px;
  background-color: var(--color-high-text);
  border-radius: 10px;
  color: #ffffff;
  font-size: 12px;
  position: relative;
  top: -15px;
}
.detail-info .detail-columns{
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #ccc;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
}
.detail-info .detail-logistics{
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.detail-logistics img{
  width: 12px;
  display: inline;
}
</style>
