//Global Variables
const cardPerPage = 5;
let currentPage = 1;

//Helper Function for Pagination
function getContainer() {
    return document.getElementById('recipe-section');
}

//Helper Function for Pagination
function previousButton() {
    return document.getElementById('prev')
}

//Helper Function for Pagination
function nextButton() {
    return document.getElementById('next')
}

//Helper Function for Pagination
function pageNumbers() {
    return document.getElementById('page-numbers')
}

//Helper Function for Pagination
function updateCards() {
    const cardContainer = getContainer();
    return Array.from(cardContainer.getElementsByClassName('card-flip'));
}

//Displays Cards and Displays Page
function displayPage(page) {
    const cards = updateCards();
    const start = (page - 1) * cardPerPage;
    const end = start + cardPerPage;
    console.log(start);
    cards.forEach((card, index) => {
        if (index >= start && index < end) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    })

}

//Checks Card Values and Updates them.
function checkPagination() {
    const pageNmbrs = pageNumbers();
    const prevBtn = previousButton();
    const nextBtn = nextButton();
    const cards = updateCards();

    const totalPages = Math.ceil(cards.length / cardPerPage);

    pageNmbrs.textContent = `Page ${currentPage} of ${totalPages}`;

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}

//Creates the Pagination an attaches eventlisteners to buttons
function createPagination() {
    const prevBtn = previousButton();
    const nextBtn = nextButton();


    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayPage(currentPage);
            checkPagination();
        }
    })

    nextBtn.addEventListener('click', () => {
        const cards = updateCards();
        const totalPages = Math.ceil(cards.length / cardPerPage);

        if (currentPage < totalPages) {
            currentPage++;
            displayPage(currentPage);
            checkPagination();
        }
    })

}


//Exports functions to be used and values in other JS
export {
    cardPerPage, currentPage, displayPage, checkPagination, createPagination
};
