("use strict");
import dictionnary from "./dictionnaryGenerator";
import nav from "./nav";

dictionnary();

// NAVIGATION //
nav(".button--nav", ".section--nav");

// const navButton = document.querySelector(".button--nav");
// const nav = document.querySelector(".section--nav");

// navButton.addEventListener("click", e => {
//   navButton.classList.toggle("button--nav-open");
//   nav.classList.toggle("section--nav-open");
// });

// document.querySelectorAll('.nav__list-el').forEach(el => {
//     el.addEventListener('click', (e) => {
//         e.preventDefault()
//         let link = e.currentTarget.dataset.link;
//         document.body.dataset.page = link
//     })
// })
