import Vue from 'vue'
import Vuex from 'vuex'
import Measure from "./models/Measure"
import Efa from "./models/Efa"
import { collect } from 'collect.js'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        measures: (require.context('./data/measures/', true, /\.json$/i).keys().map(key => require("./data/measures/" + key.split('/').pop().split('.')[0]))).map(rawMeasure => new Measure(rawMeasure)),
        efas: require.context('./data/efas/', true, /\.json$/i).keys().map(key => require("./data/efas/" + key.split('/').pop().split('.')[0])).map(rawEfa => new Efa(rawEfa)),
        settings: {
            sortCostingsBy: "name"
        }
    },

    getters: {
        // ...
        getEfaById: (state) => (id) => {
            return state.efas.find(efa => efa.id === id)
        },

        getMeasureForCostingWithId: (state) => (id) => {

            return collect(state.measures).first((measure) => {

                return collect(measure.costings).contains((meas) => {
                    return meas.id == id;
                });
            });
        },

        getLatestEfa: (state) => () => {
            return collect(state.efas).sortByDesc("publication_date").first();
        }
    }

})
export default store;