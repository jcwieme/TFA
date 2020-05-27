export default function nav(buttonClass, sectionClass) {
  const navButton = document.querySelector(buttonClass);
  const nav = document.querySelector(sectionClass);

  navButton.addEventListener("click", e => {
    navButton.classList.toggle("button--nav-open");
    nav.classList.toggle("section--nav-open");
  });
}
