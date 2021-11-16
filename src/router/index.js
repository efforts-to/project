import Vue from 'vue'
import VueRouter from 'vue-router'



const Home = ()=>import('views/home/Home')
const Category = ()=>import('views/category/Category')
const Cart = ()=>import('views/cart/Cart')
const Profile = ()=>import('views/profile/Profile')
const Detail = ()=>import('views/detail/detail')

Vue.use(VueRouter)


const routes=[
  {
    path:'',
    redirect:'/Home'
  },
  {
    path:'/Home',
    component:Home
  },
  {
    path:'/Category',
    component:Category,
  },
  {
    path:'/Cart',
    component:Cart
  },
  {
    path:'/Profile',
    component:Profile
  },
  {
    path:'/detail/:iid',
    component:Detail
  }
]


const router = new VueRouter({
  routes,
  mode:'history'
})
export default router
