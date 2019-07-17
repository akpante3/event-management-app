import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from '@/pages/LandingPage';
import SingleItem from '@/pages/SingleItem/index';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage,
    },
    {
      path: '/single-item',
      name: 'SingleItem',
      component: SingleItem,
    },

  ],
  mode: 'history',
});

export default router;
