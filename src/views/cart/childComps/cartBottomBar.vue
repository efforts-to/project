<template>
  <div class="bottom-bar">
    <div class="check">
      <check-button
        class="check-button"
        :is-checked="isSelectAll"
      />
      <span>全部</span>
    </div>
    <div class="total">
      合计：{{totalPrice}}
    </div>
    <div class="calculate">
      去结算({{cartLength}})
    </div>
  </div>
</template>

<script>
import checkButton from "./checkButton";
import {mapGetters} from "vuex";
export default {
  name: "cartBottoBar",
  components:{
    checkButton
  },
  computed:{
    ...mapGetters([
      'cartLength',
      'cartList'
    ]),
    totalPrice(){
      return '￥' + this.cartList.filter((parameter)=>{
        return parameter.checked;
      }).reduce((initValue,item)=>{
        return initValue + item.realPrice * item.count;
      },0).toFixed(2);
    },
    isSelectAll(){
      // 通过filter，如果有没有选中的商品，那么返回值是true，那么必定会有一个数组，再对数组取反，返回false
      // return !(this.cartList.filter(ele=>{
      //   return !ele.checked
      // }).length)

      //通过find，查找checked为false的商品，然后返回其下标
      return !(this.cartList.find(ele=>{
        return !ele.checked;
      }))

    }
  },
  methods:{
    isSelect(){
      // this.cartList.find(e=>{
      //   console.log(e.checked = true)
      // })
    }
  }
}
</script>

<style scoped>
.bottom-bar{
  height: 49px;
  width: 100%;
  background-color: #eeeeee;
  position: relative;
  z-index: 999;
  display: flex;
  align-items: center;
  position: relative;
}
.check-button{
  display: inline-block;
}
.check{
  line-height: 49px;
  vertical-align: middle;
  margin-right: 10px;
}
.calculate{
  height: 40px;
  line-height: 40px;
  width: 100px;
  text-align: center;
  color: #ffffff;
  background-color: var(--color-high-text);
  position: absolute;
  right: 10px;
}
</style>
