import Vue from 'vue';
import Router from 'vue-router';
// import Home from '@/pages/Home.vue';
// import About from '@/pages/About.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/pages/Home.vue').default,
    },
    {
      path: '/about',
      name: 'about',
      // meta: {layout: ''},
      component: () => import('@/pages/About.vue'),
    },
  ],
});
