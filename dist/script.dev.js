"use strict";

var btnMenu = document.querySelector("#btnMenu");
var menuContent = document.querySelector("#menuContent");
btnMenu.addEventListener("click", function () {
  menuContent.classList.toggle("hide");
});