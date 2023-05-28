// search
const search = document.querySelector(".search-box input"),
        images = document.querySelectorAll(".card");

search.addEventListener("keyup", e => {
    let searchValue = search.value.toLowerCase();
    images.forEach(image => {
        if(image.dataset.name.includes(searchValue)) { // matching value with getting attribute of images
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });
});

// reset search
search.addEventListener("keyup", () => {
    if(search.value === "") {
        images.forEach(image => {
            image.style.display = "block";
        });
    }
});
