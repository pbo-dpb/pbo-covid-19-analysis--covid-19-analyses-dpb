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
    path: '/:language/costing-economic-response-plan--etablissement-des-couts-plan-intervention-economique',
    name: 'CostingERP',
    component: () => import(/* webpackChunkName: "about" */ '../components/CostingEconomicResponsePlan/CostingEconomicResponsePlan.vue')
  },
  {
    path: '/:language/scenario-analysis--analyse-de-scenario',
    name: 'ScenarioAnalysis',
    component: () => import(/* webpackChunkName: "about" */ '../components/ScenarioAnalysis/ScenarioAnalysis.vue')
  },
  {
    path: '/:language/costings-requested-by-parliamentarians--etablissement-des-couts-demandes-des-parlementaires',
    name: 'ParliamentariansRequests',
    component: () => import(/* webpackChunkName: "about" */ '../components/ParliamentariansRequests/ParliamentariansRequests.vue')
  },
  {
    path: '/:language/fullcostingtable',
    name: 'FullCostingTable',
    component: () => import(/* webpackChunkName: "about" */ '../components/FullCostingsTable/FullCostingsTable.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
