"use strict"

// NAVIGATION //

const navButton = document.querySelector(".button--nav");
const nav = document.querySelector(".section--nav");

navButton.addEventListener("click", (e) =>
{
    navButton.classList.toggle("button--nav-open");
    nav.classList.toggle("section--nav-open");
});
