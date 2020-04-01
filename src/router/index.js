import Vue from 'vue'
import VueRouter from 'vue-router'
import Live from 'components/live/live'
import ShortVideo from 'components/short-vedio/short-vedio'
import Graphic from 'components/graphic/graphic'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/live'
  },
  {
    path: '/live',
    component: Live
  },
  {
    path: '/short-vedio',
    component: ShortVideo
  },
  {
    path: '/graphic',
    component: Graphic
  }
]

const router = new VueRouter({
  routes
})

export default router
