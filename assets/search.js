var searchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event) {
    event.preventDefault();

    var searchInputVal = document.querySelector('#search-input').value;
    var formatInput = document.querySelector('#search-input').value;

    if (!searchInputVal) {
        console.error('You need a searcg uboyt value!');
        return;
    }
    var quearyString = './search-results.html?q=' + searchInputVal + '&format=' + formatInput;

    location.assign(quearyString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);