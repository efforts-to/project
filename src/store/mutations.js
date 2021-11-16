import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations-types'

const mutations = {
  [ADD_TO_CART](state,payload){
    //通过oldProduct的值来判断是修改商品数量，还是添加新商品
    payload.count = 1;
    payload.checked = true;
    state.cartList.push(payload)
  },
  [ADD_COUNTER](state,payload){
    payload.count++;
  }
}

export default mutations;
