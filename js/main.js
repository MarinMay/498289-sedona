var button = document.querySelector(".hotel-search-button");
var hotel = document.querySelector(".search-form");
var form = hotel.querySelector("form");
var arrivalDate = document.querySelector("[name=arrival-date]");
var dateOfDeparture = document.querySelector("[name=date-of-departure]");
var adults = document.querySelector("[name=number-of-adults]");
var child = document.querySelector("[name=number-of-child]");
var storageArrivalDate = localStorage.getItem("arrivalDate");
var storageDateOfDeparture = localStorage.getItem("dateOfDeparture");
var storageAdults = localStorage.getItem("adults");
var storageChild = localStorage.getItem("child");

hotel.classList.add("search-form-close");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  hotel.classList.toggle("search-form-close");
  arrivalDate.focus();
  if (storageArrivalDate || storageDateOfDeparture || storageAdults || storageChild) {
    arrivalDate.value = storageArrivalDate;
    dateOfDeparture.value = storageDateOfDeparture;
    adults.value = storageAdults;
    child.value = storageChild;
  }
});

form.addEventListener("submit", function (evt) {
  if (!arrivalDate || !dateOfDeparture || !adults || !child) { 
    evt.preventDefault();
    hotel.classList.remove("modal-error");
    hotel.offsetWidth = hotel.offsetWidth;
    hotel.classList.add("modal-error");
  } 
  else {
    localStorage.setItem("arrivalDate", arrivalDate.value);
    localStorage.setItem("dateOfDeparture", dateOfDeparture.value);
    localStorage.setItem("adults", adults.value);
    localStorage.setItem("child", child.value);
  }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (!hotel.classList.contains("search-form-close")) {
        hotel.classList.add("search-form-close");
      }
    }
  });
