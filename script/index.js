// for navbar*******
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

// for main btn*******
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

// for color picker*******
const colorsContainer = document.querySelector(".colors");

const colors = colorsContainer.querySelectorAll("li");
const changedElements = document.querySelectorAll(".change-color");

for (let x = 0; x < colors.length; x++) {
  colors[x].style.width = "25px";
  colors[x].style.height = "25px";
  colors[x].style.borderRadius = "50%";
  colors[x].style.margin = "5px 5px";
  colors[x].style.margin = "5px 5px";

  switch (x) {
    case 0:
      colors[x].style.backgroundColor = "#6957af";
      break;
    case 1:
      colors[x].style.backgroundColor = "#f72b1c";
      break;
    case 2:
      colors[x].style.backgroundColor = "#8a2be2";
      break;
    case 3:
      colors[x].style.backgroundColor = "#4169e1";
      break;
    case 4:
      colors[x].style.backgroundColor = "#daa520";
      break;
    case 5:
      colors[x].style.backgroundColor = "#ee6192";
      break;
    case 6:
      colors[x].style.backgroundColor = "#9acd32";
      break;
    case 7:
      colors[x].style.backgroundColor = "#fa5b0f";
      break;
    case 8:
      colors[x].style.backgroundColor = "#72b626";
      break;
    case 9:
      colors[x].style.backgroundColor = "#c84bcc";
      break;
  }
  const body = document.querySelector("body");
  const cover = document.querySelector(".cover");
  colors[x].addEventListener("click", () => {
    for (const el of changedElements) {
      el.style.color = colors[x].style.backgroundColor;
    }
    btn.style.backgroundColor = colors[x].style.backgroundColor;
    cover.style.backgroundColor = colors[x].style.backgroundColor;
    body.style.background = `-moz-linear-gradient(75deg, ${colors[x].style.backgroundColor} 22%, #111 22%)`
    body.style.background = `-webkit-linear-gradient(75deg, ${colors[x].style.backgroundColor} 22%, #111 22%)`
    body.style.background = `linear-gradient(75deg, ${colors[x].style.backgroundColor} 22%, #111 22%)`
  });
}

// for dynamic positioning******
// for setting btn*******
const settingBtn = document.querySelector(".settings");
const containerSwitcher = document.querySelector(".container-switcher");
const closing = containerSwitcher.querySelector(".close");

settingBtn.style.left = "0%";
containerSwitcher.style.left = "-15.7%";

settingBtn.addEventListener("click", () => {
  settingBtn.style.transition = "left 0.4s linear";
  containerSwitcher.style.transition = "left 0.4s 0.4s linear";

  settingBtn.style.left = "-4%";
  containerSwitcher.style.left = "0%";
});

closing.addEventListener("click", () => {
  containerSwitcher.style.transition = "left 0.4s linear";
  settingBtn.style.transition = "left 0.4s 0.4s linear";
  settingBtn.style.left = "0%";
  containerSwitcher.style.left = "-15.7%";
});

// for changing theme
