var link = document.querySelector(".booking-search-button");
var popup = document.querySelector(".booking-popup");
var focus_input = popup.querySelector("[name=arrival-date]");
var click = 0;

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  click++;
  if (click % 2 === 0) {
  popup.classList.remove("popup-appear");
  popup.classList.add("popup-hide");
  } else {
  popup.classList.remove("popup-hide");
  popup.classList.add("popup-appear");
  focus_input.focus();
  }
});
