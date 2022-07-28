import { createStore } from 'vuex'

import Measure from "./models/Measure"
import Efa from "./models/Efa"
import { collect } from 'collect.js'
import strings from "../strings"

const measures = import.meta.glob('./data/measures/*.json', { eager: true })
const efas = import.meta.glob('./data/efas/*.json', { eager: true })

const store = createStore({
    state: {
        measures: collect(measures).map(rawMeasure => new Measure(rawMeasure)).values().items,
        efas: collect(efas).map(rawEfa => new Efa(rawEfa)).values().items,
        settings: {
            sortCostingsBy: "name"
        },
        costedYearsCount: Object.keys(strings["en"].costingerp.costed_years).length,
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
        },


    }

})
export default store;