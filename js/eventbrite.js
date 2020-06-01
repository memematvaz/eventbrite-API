class EventBrite {
    constructor(){
        this.token_auth = 'RRDKGTS35IYN4CAVYGZA';
        this.order = 'date';
    }

    async getCategories() {
        const categoriesApi = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

        const categoriesJSON = await categoriesApi.json();

        return categoriesJSON;
    }

}