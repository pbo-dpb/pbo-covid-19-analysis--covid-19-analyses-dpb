import Vue from 'vue'
import VueRouter from 'vue-router'
import AnalysisHome from '../components/AnalysisHome/AnalysisHome.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/en' },
  {
    path: '/:language',
    name: 'AnalysisHome',
    component: AnalysisHome
  },
  {
    path: '/:language/fullcostingtable---tempname',
    name: 'FullCostingTable',
    component: () => import(/* webpackChunkName: "about" */ '../components/FullCostingsTable/FullCostingsTable.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
