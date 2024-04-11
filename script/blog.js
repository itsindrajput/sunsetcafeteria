let hoverElement = document.querySelector("#status-active");
let selectedElement = document.querySelector("#select-blogs");
hoverElement.addEventListener("mouseover", function () {
  selectedElement.style.display = "block";
});
hoverElement.addEventListener("mouseout", function () {
  selectedElement.style.display = "none";
});
selectedElement.addEventListener("mouseout", function () {
  selectedElement.style.display = "none";
});
