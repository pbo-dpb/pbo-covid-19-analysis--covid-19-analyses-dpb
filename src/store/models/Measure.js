import Costing from "./Costing"
import Note from "./Note"
import collect from "collect.js"

export default class Measure {
    constructor(rawMeasure) {

        this.title = rawMeasure.title;
        this.subtitle = rawMeasure.subtitle;
        this.hasFiscalImpact = rawMeasure.hasFiscalImpact;
        this.costings = collect(rawMeasure.costings).map((costing) => new Costing(costing)).sortByDesc("publication_date").items;
        this.notes = rawMeasure.notes.map((note) => new Note(note));

    }

    get cost() {
        return collect(this.costings).first().cost;
    }
}