//Select Element from the DOM
var modalBtn = document.querySelector(".modal-btn"); //Newsletter
var createBtn = document.querySelector(".create-btn"); //Create account

var modalBg = document.querySelector(".modal-bg"); //Newsletter
var createBg = document.querySelector(".create-bg"); //Create account

var modalClose = document.querySelector(".modal-close"); //Newsletter
var createClose = document.querySelector(".create-close"); //Create account

const myform = document.getElementById("modal"); //Newsletter
const create_myform = document.getElementById("create_modal"); //Create account

//Mani[pulating the DOM Elements using add and remove class
modalBtn.addEventListener("click", function () {
  //Newsletter
  modalBg.classList.add("bg-active");
});
createBtn.addEventListener("click", function () {
  //Create account
  createBg.classList.add("bg-active");
});

modalClose.addEventListener("click", function () {
  //Newsletter
  modalBg.classList.remove("bg-active");
});
createClose.addEventListener("click", function () {
  //Create account
  createBg.classList.remove("bg-active");
});

//Newsletter subscription
myform.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name1").value;

  alert(`Congratulation ${name} 🎉🎉✨. Newsletter subscription successful`);
});

//Account creation
create_myform.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name2").value;

  alert(`Congratulation ${name} 🎉🎉✨. accounted created successful`);
});
