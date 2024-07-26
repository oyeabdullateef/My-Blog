const body = document.querySelector("body");
const themebutton = document.querySelector(".theme");
let theme = "light";
function themeChanger() {
  if (theme == "light") {
    body.setAttribute("class", "dark");
    theme = "dark";
  } else {
    body.setAttribute("class", "light");
    theme = "light";
  }
}
themebutton.addEventListener("click", themeChanger);
