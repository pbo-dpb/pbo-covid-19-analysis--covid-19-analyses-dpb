import { createRouter, createWebHashHistory } from 'vue-router'

import AnalysisHome from '../components/AnalysisHome/AnalysisHome.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AnalysisHome',
    component: AnalysisHome
  },
  /*{
    path: '/:language/costing-economic-response-plan--etablissement-des-couts-plan-intervention-economique',
    name: 'CostingERP',
    component: () => import( '../components/CostingEconomicResponsePlan/CostingEconomicResponsePlan.vue')
  },
  {
    path: '/:language/scenario-analysis--analyse-de-scenario',
    name: 'ScenarioAnalysis',
    component: () => import( '../components/ScenarioAnalysis/ScenarioAnalysis.vue')
  },
  {
    path: '/:language/costings-requested-by-parliamentarians--etablissement-des-couts-demandes-des-parlementaires',
    name: 'ParliamentariansRequests',
    component: () => import( '../components/ParliamentariansRequests/ParliamentariansRequests.vue')
  },
  {
    path: '/:language/monitoring-framework--cadre-de-surveillance',
    name: 'MonitoringFramework',
    component: () => import( '../components/MonitoringFramework/MonitoringFramework.vue')
  },
  {
    path: '/:language/economic-fiscal-analysis--analyses-economiques-financieres',
    name: 'EfasHome',
    component: () => import( '../components/EconomicFiscalAnalysis/EconomicFiscalAnalysis.vue')
  },
  {
    path: '/:language/economic-fiscal-analysis--analyses-economiques-financieres/:efaId',
    name: 'EfaAnalysis',
    component: () => import( '../components/EconomicFiscalAnalysis/EconomicFiscalAnalysisAnalysis.vue')
  },
  {
    path: '/:language/fullcostingtable',
    name: 'FullCostingTable',
    component: () => import( '../components/FullCostingsTable/FullCostingsTable.vue')
  }*/

]

const router = new VueRouter({
  routes
})

export default router
