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

for (let x = 0; x < colors.length; x++) {
  colors[x].style.width = "25px";
  colors[x].style.height = "25px";
  colors[x].style.borderRadius = "50%";
  colors[x].style.margin = "5px 5px";

  switch (x) {
    case 0:
      colors[x].style.backgroundColor = "purple";
      break;
    case 1:
      colors[x].style.backgroundColor = "red";
      break;
    case 2:
      colors[x].style.backgroundColor = "blueviolet";
      break;
    case 3:
      colors[x].style.backgroundColor = "goldenrod";
      break;
    case 4:
      colors[x].style.backgroundColor = "magenta";
      break;
    case 5:
      colors[x].style.backgroundColor = "yellowgreen";
      break;
    case 6:
      colors[x].style.backgroundColor = "orange";
      break;
    case 7:
      colors[x].style.backgroundColor = "green";
      break;
    case 8:
      colors[x].style.backgroundColor = "yellow";
      break;
    case 9:
      colors[x].style.backgroundColor = "blue";
      break;
  }
}

// for dynamic positioning******
// for setting btn*******
const settingBtn = document.querySelector(".settings");
const containerSwitcher = document.querySelector(".container-switcher");
const closing = containerSwitcher.querySelector(".close");

settingBtn.style.left = "0%";
containerSwitcher.style.left = "-15.7%";

settingBtn.addEventListener("click", () => {
  settingBtn.style.transition = "left 0.4s linear"
  containerSwitcher.style.transition = "left 0.4s 0.4s linear"
  
  settingBtn.style.left = "-4%";
  containerSwitcher.style.left = "0%";
});

closing.addEventListener("click", () => {
  containerSwitcher.style.transition = "left 0.4s linear"
  settingBtn.style.transition = "left 0.4s 0.4s linear"
  settingBtn.style.left = "0%";
  containerSwitcher.style.left = "-15.7%";
});
