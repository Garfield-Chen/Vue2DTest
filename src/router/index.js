import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

// import { getWebData, getContract } from '@/web3'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'board',
    component: () =>import(/* webpackChunkName: "Home" */ '../views/Layout.vue'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: () =>
          import(/* webpackChunkName: "Home" */ '../views/home/index.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return {
        x: 0,
        y: to.meta.savedPosition || 0,
      }
    }
  },
  linkExactActiveClass: 'isactive',
  routes,
})

/**
 * 进入路由之前
 * **/
// var whiteRes = [];
// var whiteList = exportWhiteList(routes)

router.beforeEach((to, from, next) => {
  store.state.loading = true
  next();
  // getWebData(to, from, next)
})

// 进入路由实例化合约
router.afterEach(async () => {
  store.state.loading = false
  // await getContract()
})


// 重复点击路由报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
