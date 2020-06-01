class EventBrite {
    constructor(){
        this.token_auth = 'RRDKGTS35IYN4CAVYGZA';
        this.order = 'date';
    }

    async getEvents(event, category){
        const responseEvent = await fetch
        (`https://www.eventbriteapi.com/v3/events/search/?q=${event}&sort_by=${this.order}&categories=${category}&token=${this.token_auth}`);

        const events = await responseEvent.json()
        
        return {
            events
        }

    }

    async getCategories() {
        const categoriesApi = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

        const categoriesJSON = await categoriesApi.json();

        return categoriesJSON;
    }

}