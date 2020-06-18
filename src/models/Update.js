export default class Update {
    constructor(apiObject) {
        /*
        // Object as provided by API
        {
            "id": "20200430",
            "title_en": "April 30, 2020",
            "title_fr": "30 avril 2020",
            "meta": {
                "nominal_gdp": {
                    "2019-2020": 1234,
                    "2020-2021": 5678
                },
                "deficit": {
                    "2019-2020": 12.3,
                    "2020-2021": 456.7
                }
            }
        },
        */

        this.title_en = apiObject.title_en;
        this.title_fr = apiObject.title_fr;
        this.id = apiObject.id;
        this.meta = apiObject.meta;
    }
}