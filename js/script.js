var link = document.querySelector(".booking-search-button");
var popup = document.querySelector(".booking-popup");
var focus_input = popup.querySelector("[name=arrival-date]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
    popup.classList.toggle("popup-hide");
    popup.classList.toggle("popup-appear");
    focus_input.focus();
});
