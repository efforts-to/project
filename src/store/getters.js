const getters = {
  cartLength(state,getters){
    return state.cartList.length;
  },
  cartList(state,getters){
    return state.cartList;
  }
}

export default  getters
