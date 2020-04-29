import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'

Vue.use(VueRouter)

const routes = [
{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/cart/produk',
  name: 'Cart',
  component: Cart
}
]

const router = new VueRouter({
 mode: 'history',
 routes
})

export default router
