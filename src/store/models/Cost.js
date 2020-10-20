import strings from "../../strings"
import { collect } from "collect.js";

export default class Cost {
    constructor(rawCost) {
        this._cost = rawCost;
    }

    /**
     * Returns a localized list of costs per year
     */
    localizedCost(language, preferNet = false) {
        return collect(strings[language].costingerp.costed_years).map((costedYear, costedYearKey) => {
            let cost;
            if (preferNet && this._cost.net) {
                cost = this._cost.net[costedYearKey];
            } else if (!preferNet && this._cost.gross) {
                cost = this._cost.gross[costedYearKey];
            } else {
                cost = this._cost[costedYearKey] ? this._cost[costedYearKey] : 0;
            }
            if (!cost) {
                cost = 0;
            }

            return {
                year: costedYear,
                cost
            }
        }).items;
    }

    aggregatedCost() {
        return collect(this.localizedCost).sum("cost");
    }
}