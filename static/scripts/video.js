
// search
const search = document.querySelector(".search-box input"),
videos = document.querySelectorAll(".videos .vid");

search.addEventListener("keyup", e => {
let searchValue = search.value.toLowerCase();
videos.forEach(video => {
if(video.dataset.name.includes(searchValue)) { // matching value with getting attribute of videos
video.style.display = "block";
} else {
video.style.display = "none";
}
});
});

// reset search
search.addEventListener("keyup", () => {
if(search.value === "") {
videos.forEach(video => {
video.style.display = "block";
});
}
});

