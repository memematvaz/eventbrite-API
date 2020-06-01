class Interface {
    constructor() {
        this.init();

        this.list = document.getElementById('result-events');
    }

    init(){
        this.printCategories();
    }

    printCategories(){
        const categoriesList = eventbrite.getCategories()
            .then(categoriesJson => {
                console.log(categoriesJson.categories)
                const categories = categoriesJson.categories;
                
                const selectCategories = document.getElementById('category-list')

                categories.forEach(category => {
                    const option = document.createElement('option');
                    option.value = category.id;
                    option.appendChild(document.createTextNode(category.name_localized))
                    selectCategories.appendChild(option);
                })
            })
    }

    errorMessage(message, classes){
        const div = document.createElement('div');
        div.classList = classes;
        div.appendChild(document.createTextNode(message));

        const searchDiv = document.querySelector('#search');
        searchDiv.appendChild(div);

        setTimeout(() => {
            this.deleteMessage();
        }, 3000);
    }

    deleteMessage() {
        const message = document.querySelector('.alert')
        if(message){
            message.remove()
        }
    }
}