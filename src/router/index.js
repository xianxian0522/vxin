import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: "/home",
    name: "Home",
    component: () => import('../views/Home.vue'),
  },
  {
    path: "/news",
    name: "news",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/News.vue"),
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/Product.vue'),
  },
];

const router = new Router({
  mode: "hash",
  base: '/',
  routes,
});

export default router;

