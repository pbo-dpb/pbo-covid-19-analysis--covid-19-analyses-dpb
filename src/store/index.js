import Vue from 'vue'
import Vuex from 'vuex'
import Measure from "./models/Measure"
import Outlook from "./models/Outlook"
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        measures: (require.context('./data/measures/', true, /\.json$/i).keys().map(key => require("./data/measures/" + key.split('/').pop().split('.')[0]))).map(rawMeasure => new Measure(rawMeasure)),
        outlooks: require.context('./data/outlooks/', true, /\.json$/i).keys().map(key => require("./data/outlooks/" + key.split('/').pop().split('.')[0])).map(rawOutlook => new Outlook(rawOutlook)),
    },

})
export default store;