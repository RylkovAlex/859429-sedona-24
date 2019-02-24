var link = document.querySelector(".booking-search-button");
var popup = document.querySelector(".booking-popup");
var focus_input = popup.querySelector("[name=arrival-date]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("popup-appear");
  setTimeout(function() { focus_input.focus();}, 500); /* фокус в первый инпут с небольшой задержкой */
});
