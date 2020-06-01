const eventbrite = new EventBrite;

const ui = new Interface;

const searchBtn = document.getElementById('searchBtn')



search = (e) => {
    e.preventDefault();

    const textSearch = document.getElementById('event').value;

    const categoriesSelect = document.getElementById('category-list');
    const categorySelected = categoriesSelect.options[categoriesSelect.selectedIndex].value;

    if(textSearch) {
        console.log('searching')
    } else { 
        ui.errorMessage('Escribe qué estás buscando', 'alert alert-danger mt-4')
    }
}

deleteErrorMessage = () => {
    const errorMessage = document.querySelector('.alert');
    if(errorMessage) {
        errorMessage.remove()
    }
}

searchBtn.addEventListener('click', search)