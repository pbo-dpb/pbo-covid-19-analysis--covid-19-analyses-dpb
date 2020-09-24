import Cost from "./Cost"
export default class Costing {
    constructor(rawCosting) {
        this.id = rawCosting.id;
        this.hasArtifacts = rawCosting.hasArtifacts;
        this.publication_date = new Date(rawCosting.publication_date);
        this.cost = new Cost(rawCosting.cost);
    }
}