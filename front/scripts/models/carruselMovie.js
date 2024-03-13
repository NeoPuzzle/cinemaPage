fetch("https://students-api.up.railway.app/movies")
    .then(response => response.json())
    .then(data => {
        const carouselItems = document.getElementsByClassName("carousel-item");
        for (let i = 0; i < carouselItems.length; i++) {
            carouselItems[i].style.backgroundImage = `url(${data[i].imageUrl})`;
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });


