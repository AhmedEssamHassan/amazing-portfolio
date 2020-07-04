const links = document.querySelectorAll(".img");

const titles = document.querySelectorAll(".title");

const listItems = document.querySelectorAll("li");

const imgs = document.querySelectorAll(".nav-img");

for (let x = 0; x < links.length; x++) {
  links[x].addEventListener("mouseenter", () => {
    titles[x].style.transition = "visibility .75s, opacity .75s ";
    titles[x].className = "show";
    titles[x].style.opacity = ".75";
  });
}

for (let x = 0; x < links.length; x++) {
  links[x].addEventListener("mouseleave", () => {
    titles[x].style.transition = "visibility .75s, opacity .75s ";
    titles[x].className = "";
    titles[x].style.opacity = "0";
    titles[x].style.margin = "0";
  });
 }
