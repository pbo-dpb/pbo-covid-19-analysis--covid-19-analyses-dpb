import Cost from "./Cost"
export default class Costing {
    constructor(rawCosting) {
        this.id = rawCosting.id;
        this.hideFromMeasuresTable = rawCosting.hide_from_measures_list;
        this.hasArtifacts = rawCosting.hasArtifacts;
        this.publication_date = new Date(rawCosting.publication_date + "T09:00:00.000Z");
        this.cost = new Cost(rawCosting.cost);
    }

    localizedArtifactUrl(language) {
        if (!this.hasArtifacts) {
            return null;
        }
        return `https://www.pbo-dpb.gc.ca/web/default/files/Documents/LEG/${this.id}/${this.id}_${language}.pdf`
    }
}