const links = document.querySelectorAll(".img");

const titles = document.querySelectorAll(".title");

const listItems = document.querySelectorAll("li");

const imgs = document.querySelectorAll(".nav-img");

for (let x = 0; x < links.length; x++) {
  titles[x].style.transition = "visibility 3.5s";
  links[x].addEventListener("mouseenter", () => {
    listItems[x].style.borderRadius = "35px";
    titles[x].style.display = "flex";
    imgs[x].style.marginLeft = "15px";
    links[x].style.backgroundColor = "#11111100";
    links[x].style.color = "white";
    listItems[x].style.backgroundColor = "#ffb400";
  });
}
for (let x = 0; x < links.length; x++) {
  // links[x].style.transition = "all 1s";
  if (x === 0) {
    links[x].addEventListener("mouseleave", () => {
      links[x].style.backgroundColor = "#ffb400";
      listItems[x].style.borderRadius = "50%";
      listItems[x].style.backgroundColor = "#11111100";
      imgs[x].style.marginLeft = "0px";
      titles[x].style.display = "none";
      links[x].style.color = "#551a8b";
    });
  } else {
    links[x].addEventListener("mouseleave", () => {
      listItems[x].style.borderRadius = "50%";
      listItems[x].style.backgroundColor = "#11111100";
      imgs[x].style.marginLeft = "0px";
      titles[x].className = "";
      titles[x].style.display = "none";
      links[x].style.color = "#551a8b";
    });
  }
}
