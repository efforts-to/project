import {request} from "./request";

export function getDetail(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}
export function getRecommend(){
  return request({
    url:'/recommend'
  })
}

export class Goods{
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.service = services
    this.realPrice = itemInfo.lowNowPrice
  }
}
export class shopInfo{
  constructor(shopInfo) {
    this.shopId = shopInfo.shopID
    this.shopLogo = shopInfo.shopLogo
    this.shopName = shopInfo.name
    this.shopUrl = shopInfo.shopUrl
    this.score = shopInfo.score
    this.cSells = shopInfo.cSells
    this.cGoods = shopInfo.cGoods
  }
}

export class GoodsParam{
  constructor(info,rule) {
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set
    this.size = rule.tables;
  }
}
