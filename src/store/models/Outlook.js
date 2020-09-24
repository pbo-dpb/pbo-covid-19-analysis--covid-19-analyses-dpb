import Cost from './Cost.js'

export default class Outlook {
    constructor(rawOutlook) {
        this.id = rawOutlook.id;
        this.publication_date = new Date(rawOutlook.publication_date);
        this.title = rawOutlook.title;
        this.url = rawOutlook.url;
        this.poster = rawOutlook.poster;
        this.indicators = rawOutlook.indicators;

        this.otherMeasures = {
            cost: new Cost(rawOutlook.other_measures.cost),
        }

        this._costings = rawOutlook.costings;
    }
}