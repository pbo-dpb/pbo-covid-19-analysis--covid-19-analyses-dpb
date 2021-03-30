import Cost from './Cost.js'

export default class Efa {
    constructor(rawEfa) {
        this.id = rawEfa.id;
        this.publication_date = new Date(rawEfa.publication_date + "T09:00:00.000Z");
        this.title = rawEfa.title;
        this.description = rawEfa.description;
        this.footer = rawEfa.footer;
        this.url = rawEfa.url;
        this.poster = rawEfa.poster;
        this.indicators = rawEfa.indicators;
        this.files = rawEfa.files;

        this.otherMeasures = {
            cost: new Cost(rawEfa.other_measures.cost),
            description: rawEfa.other_measures.description
        }

        this.total = {
            cost: new Cost(rawEfa.total.cost)
        }

        this.costings = rawEfa.costings.map(efaCosting => {
            if (efaCosting.cost) {
                efaCosting.cost = new Cost(efaCosting.cost);
            }
            return efaCosting;
        });
    }


}