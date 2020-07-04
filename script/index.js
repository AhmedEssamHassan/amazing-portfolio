const links = document.querySelectorAll(".img");

const listItems = document.querySelectorAll("li");

const imgs = document.querySelectorAll(".nav-img");

for (let x = 0; x < links.length; x++) {
  const title = document.createElement("h2");
  switch (x) {
    case 0:
      title.textContent = "home";
      break;
    case 1:
      title.textContent = "about";
      break;
    case 2:
      title.textContent = "portfolio";
      break;
    case 3:
      title.textContent = "contact";
      break;
    case 4:
      title.textContent = "blog";
      break;
  }
  links[x].addEventListener("mouseenter", () => {
    links[x].appendChild(title);
  });
}

const btn = document.querySelector(".button");
const img = document.createElement("img");
img.style.marginLeft = "7px";
img.src = "img/iconfinder_user_1608727.png";
img.className = "hide";
btn.addEventListener("mouseenter", () => {
  btn.appendChild(img);
  img.style.visibility = "visible";
  img.style.opacity = "1";
  btn.style.transition = "width 2s";
  });

btn.addEventListener("mouseleave", () => {
  btn.removeChild(img);
});


