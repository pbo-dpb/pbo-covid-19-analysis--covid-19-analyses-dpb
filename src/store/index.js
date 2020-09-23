import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        //measures: require("./data/measures.json")
        measures: require.context('./data/measures/', true, /\.json$/i).keys().map(key => require("./data/measures/" + key.split('/').pop().split('.')[0])),
    },

})
export default store;