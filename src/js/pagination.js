
const cardPerPage = 2;
let currentPage = 1;

function getContainer() {
    return document.getElementById('recipe-section');
}

function previousButton() {
    return document.getElementById('prev')
}

function nextButton() {
    return document.getElementById('next')
}

function pageNumbers() {
    return document.getElementById('page-numbers')
}

function updateCards() {
    const cardContainer = getContainer();
    return Array.from(cardContainer.getElementsByClassName('card-flip'));
}

function displayPage(page) {
    const cards = updateCards();
    const start = (page - 1) * cardPerPage;
    const end = start + cardPerPage;
    cards.forEach((card, index) => {
        if (index >= start && index < end) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    })

}
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



export {
    cardPerPage, currentPage, displayPage, checkPagination, createPagination
};
