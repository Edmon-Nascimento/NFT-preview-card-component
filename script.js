const imageContainer = document.querySelector("#image-container");
const title = document.querySelector("#title");
const author = document.querySelector("#creator");

title.addEventListener("mouseenter", showHoverEffect);
author.addEventListener("mouseenter", showHoverEffect);

title.addEventListener("mouseout", hideHoverEffect);
author.addEventListener("mouseout", hideHoverEffect);

function showHoverEffect() {
  imageContainer.classList.add("active");
}

function hideHoverEffect() {
  imageContainer.classList.remove("active");
}
