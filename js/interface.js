class Interface {
    constructor() {
        this.init();

        this.list = document.getElementById('result-events');
    }

    init(){

    }

    printCategories(){
        const categoriesList = eventbrite.getCategories();
    }
}