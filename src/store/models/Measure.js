import Costing from "./Costing"
import Note from "./Note"

export default class Measure {
    constructor(rawMeasure) {

        this.title = rawMeasure.title;
        this.subtitle = rawMeasure.subtitle;
        this.hasFiscalImpact = rawMeasure.hasFiscalImpact;
        this.costings = rawMeasure.costings.map((costing) => new Costing(costing));
        this.notes = rawMeasure.notes.map((note) => new Note(note));

    }
}