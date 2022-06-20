export default (pageName) => {
  let element = document.querySelector(".header");
  element && element.classList.remove("dark-menu");

  if (pageName != "home") {
    element && element.classList.add("dark-menu");
  }
};
