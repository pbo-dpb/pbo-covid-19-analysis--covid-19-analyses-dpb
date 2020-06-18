import collect from "collect.js";
import { DateTime, Duration } from "luxon";

export default class Costing {
    constructor(apiObject) {
        /*
        // Object as provided by API
        {
            "title_en": "Lorem Ipsum",
            "title_fr": "Lorém ipsum",
            "category_en": null, // Unused
            "category_fr": null, // Unused
            "no_incremental_impact": false,
            "costing_updates": [
                {
                    "id": "LEG-2021-123-S",
                    "update_id": "20200430",
                    "numbers": {
                        "2019-2020": 0.0,
                        "2020-2021": 0.1
                    }
                },
                {
                    "id": "LEG-2021-123-S", // When not null, is PBO costing.
                    "update_id": "20200409",
                    "numbers": {
                        "2019-2020": 0.0,
                        "2020-2021": 123
                    }
                }
            ]
        },
        */

        this.title_en = apiObject.title_en;
        this.title_fr = apiObject.title_fr;
        this.category_en = apiObject.category_en;
        this.category_fr = apiObject.category_fr;
        this.costing_updates = apiObject.costing_updates;
        this.no_incremental_impact = apiObject.no_incremental_impact;
        this.note_en = apiObject.note_en;
        this.note_fr = apiObject.note_fr;

    }

    updateWithId(updateId) {
        return collect(this.costing_updates).firstWhere("update_id", updateId);
    }

    get totalCost() {
        return collect(this.currentCostingUpdate.numbers).sum();
    }

    get currentCostingUpdate() {
        return collect(this.costing_updates).sortByDesc('update_id').first();
    }

    get currentCostingUpdateDate() {
        return DateTime.fromString(this.currentCostingUpdate.update_id, 'yyyyMMdd');
    }

    get isPboCosting() {
        return this.currentCostingUpdate.id ? true : false;
    }

    get artifactIds() {
        return collect(this.costing_updates).pluck("id").filter().items;
    }

    get isLatestUpdateStale() {
        // A "stale" update is older than 7 days. Is used to automatically remove "updated" and "new" badges.
        const oneWeekAfterLaunch = this.currentCostingUpdateDate.plus(Duration.fromObject({ days: 7 }));
        return oneWeekAfterLaunch < DateTime.local();
    }

    get isNew() {
        return this.artifactIds.length === 1 && !this.isLatestUpdateStale;
    }

    get hasUpdatedArtifact() {
        const updates = collect(JSON.parse(JSON.stringify(this.costing_updates))).sortByDesc("update_id");
        const lastUpdate = updates.shift();
        const lastToLastUpdate = updates.first();
        let isUpdated = !this.isNew && lastUpdate.id != lastToLastUpdate.id;
        return isUpdated && !this.isLatestUpdateStale;
    }

    get hasUpdatedNumbers() {

        return false;
        // TODO : Loop through numbers with similar pattern as hasUpdatedArtifact and check for diff.
        //return !this.isNew && !this.hasUpdatedArtifact && false;
    }

    toJson() {
        return JSON.stringify(this, null, '\t');
    }

}