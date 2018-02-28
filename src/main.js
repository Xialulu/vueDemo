import Vue from 'vue'
import LayOut from './components/LayOut'
import VueRouter from 'vue-router'
import IndexPage from './pages/index'
import VueResource from 'vue-resource'
import Detail from './pages/detail'
import Analysis from './pages/detail/analysis'
import Forecast from './pages/detail/forecast'
import Count from './pages/detail/count'
import Publish from './pages/detail/publish'


Vue.use(VueRouter);
Vue.use(VueResource);
var router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      component: IndexPage
    },
    {
      path: '/detail',
      component: Detail,
      redirect: '/detail/analysis',
      children: [{
          path: 'analysis',
          component: Analysis
        },
        {
          path: 'forecast',
          component: Forecast
        },
        {
          path: 'count',
          component: Count
        },
        {
          path: 'publish',
          component: Publish
        }
      ]
    },
  ],
});
new Vue({
  el: '#app',
  router,
  components: {
    LayOut
  },
  template: '<LayOut/>'
})
