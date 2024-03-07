const container = document.getElementById("container-news");

dataOscars.forEach(data => {

    const cards = document.createElement('div');
    cards.classList.add("card", "ml-2", "mt-2","mb-2");
    cards.style.width = "18rem"

    cards.innerHTML = `
    <img src="${data.img}" alt="Card image cap" class="card-img-top">
    <div class="card-body", "col-sm">
        <h5 class="card-title">${data.title}</h5>
        <p class="card-text">${data.descrip}</p>
        <a href="#" class="btn btn-primary">${data.foo}</a>
    </div>
    `;

    container.appendChild(cards);
})