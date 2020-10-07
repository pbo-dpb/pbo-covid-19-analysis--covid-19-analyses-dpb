import strings from "../../strings"
import { collect } from "collect.js";

export default class Cost {
    constructor(rawCost) {
        this._cost = rawCost;
    }

    /**
     * Returns a localized list of costs per year
     */
    localizedCost(language) {
        return collect(strings[language].costingerp.costed_years).map((costedYear, costedYearKey) => {
            return {
                year: costedYear,
                cost: this._cost[costedYearKey] ? this._cost[costedYearKey] : 0
            }
        }).items;
    }

    aggregatedCost() {
        return collect(this.localizedCost).sum("cost");
    }
}