import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Administracion from '@/views/Administracion.vue'
import NotFound from '@/views/NotFound.vue'
import Edicion from '@/views/Edicion.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/administracion',
    name:'administracion',
    component: Administracion
  },
  {
    path:'/administracion/:id',
    component:Edicion,
    props:true
  },
  {
    path:'*',
    name:NotFound,
    component:NotFound
  },
  //{
    //path: '/about',
    //name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
