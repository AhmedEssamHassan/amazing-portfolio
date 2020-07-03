const links = document.querySelectorAll(".img");

const titles = document.querySelectorAll(".title");

const listItems = document.querySelectorAll("li");

const imgs = document.querySelectorAll(".nav-img");

for (let x = 0; x < links.length; x++) {
  links[x].addEventListener("mouseenter", () => {
    titles[x].className = "show";
    imgs[x].style.marginLeft = "15px";
    links[x].style.backgroundColor = "#11111100";
    listItems[x].style.backgroundColor = "#ffb400";
    listItems[x].style.borderRadius = "35px";
  });
}
for (let x = 0; x < links.length; x++) {
  if (x === 0) {
    links[x].addEventListener("mouseleave", () => {
      links[x].style.backgroundColor = "#ffb400";
      listItems[x].style.borderRadius = "50%";
      listItems[x].style.backgroundColor = "#11111100";
      imgs[x].style.marginLeft = "0px";
      titles[x].className = "";
    });
  } else {
    links[x].addEventListener("mouseleave", () => {
      listItems[x].style.borderRadius = "50%";
      listItems[x].style.backgroundColor = "#11111100";
      imgs[x].style.marginLeft = "0px";
      titles[x].className = "";
    });
  }
}
