import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations-types'

const actions = {
  addToCart(context,payload){
    let oldProduct = null;
    for (let item of context.state.cartList){
      if(item.iid === payload.iid){
        oldProduct = item;
      }
    }

    if(oldProduct){
      context.commit(ADD_COUNTER,oldProduct)
    }else{
      context.commit(ADD_TO_CART,payload)
    }

  }
}
export default actions;
