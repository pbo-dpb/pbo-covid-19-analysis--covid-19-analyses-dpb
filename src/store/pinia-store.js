import { defineStore } from 'pinia'

import Measure from "./models/Measure"
import Efa from "./models/Efa"
import { collect } from 'collect.js'
import strings from "../strings"

const measures = import.meta.glob('./data/measures/*.json', { eager: true })
const efas = import.meta.glob('./data/efas/*.json', { eager: true })


export default defineStore('default', {
    state: () => (
        {
            measures: collect(measures).map(rawMeasure => new Measure(rawMeasure)).values().items,
            efas: collect(efas).map(rawEfa => new Efa(rawEfa)).values().items,
            settings: {
                sortCostingsBy: "name"
            },
        }
    ),
    getters: {
        getEfaById: (state) => (id) => {
            return state.efas.find(efa => efa.id === id)
        },

        costedYearsCount: (state) => {
            console.log("count");
            return Object.keys(strings["en"].costingerp.costed_years).length;
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