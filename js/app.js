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
    } else { console.log('no hay nada')}
}

searchBtn.addEventListener('click', search)