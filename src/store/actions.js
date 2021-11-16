import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations-types'

const actions = {
  addToCart(context,payload){
    return new Promise((resolve,reject)=>{
      let oldProduct = null;
      for (let item of context.state.cartList){
        if(item.iid === payload.iid){
          oldProduct = item;
        }
      }

      //添加商品数量
      if(oldProduct){
        context.commit(ADD_COUNTER,oldProduct);
        resolve('商品数量+1')
      }
      //添加商品
      else{
        context.commit(ADD_TO_CART,payload);
        resolve('商品已加入');
      }
    })
  }
}
export default actions;
