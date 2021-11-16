<template>
  <div class="bottom-bar">
    <div class="check">
      <check-button
        class="check-button"
        :is-checked="isSelectAll"
        @click.native="isSelect"
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
      //如果cartList的长度为0，说明购物车没有数据，返回false
      if(this.cartList.length == 0 ){
        return false;
      }
      // 通过filter，如果有没有选中的商品，那么返回值是true，那么必定会有一个数组，再对数组取反，返回false
      // return !(this.cartList.filter(ele=>{
      //   return !ele.checked
      // }).length)

      //通过find，查找checked为false的商品,如果checked为false，返回当前对象，然后将当前对象转为false传给子组件
      return !(this.cartList.find(ele=>{
        return !ele.checked;
      }));

    }
  },
  methods:{
    isSelect(){
      console.log(this.isSelectAll);
      if(this.isSelectAll){
        this.cartList.forEach(item=>{
          item.checked = false;
        })
      }else{
        this.cartList.forEach(item=>{
          item.checked = true;
        })
      }
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
