function createCard(data) {
    const card = document.createElement('div');
    card.classList.add("card");
    card.style.width = "18rem";
    card.style.height = "25rem";

    card.innerHTML = `
        <img src="${data.img}" alt="Card image cap" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${data.title}</h5>
            <p class="card-text">${data.descrip}</p>
            <a href="#" class="btn btn-primary">${data.foo}</a>
        </div>
    `;

    return card;
}

function createCardContainer(card) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add("col-sm-4", "mb-3");
    cardContainer.appendChild(card);
    return cardContainer;
}

function renderCards(dataOscars, containerId) {
    const container = document.getElementById(containerId);
    dataOscars.forEach(data => {
        const card = createCard(data);
        const cardContainer = createCardContainer(card);
        container?.appendChild(cardContainer);
    });
}

module.exports = renderCards;