const colorsContainer2 = document.querySelector(".colors");
const colors2 = colorsContainer2.querySelectorAll("li");
const download = document.querySelector(".download")
const about = document.querySelector(".about")

for (let x = 0; x < colors2.length; x++) {
    colors2[x].style.width = "25px";
    colors2[x].style.height = "25px";
    colors2[x].style.borderRadius = "50%";
    colors2[x].style.margin = "5px 5px";
    // colors2[x].style.margin = "5px 5px";
  
    switch (x) {
      case 0:
        colors2[x].style.backgroundColor = "#6957af";
        break;
      case 1:
        colors2[x].style.backgroundColor = "#f72b1c";
        break;
      case 2:
        colors2[x].style.backgroundColor = "#8a2be2";
        break;
      case 3:
        colors2[x].style.backgroundColor = "#4169e1";
        break;
      case 4:
        colors2[x].style.backgroundColor = "#daa520";
        break;
      case 5:
        colors2[x].style.backgroundColor = "#ee6192";
        break;
      case 6:
        colors2[x].style.backgroundColor = "#9acd32";
        break;
      case 7:
        colors2[x].style.backgroundColor = "#fa5b0f";
        break;
      case 8:
        colors2[x].style.backgroundColor = "#72b626";
        break;
      case 9:
        colors2[x].style.backgroundColor = "#c84bcc";
        break;
    }
    colors2[x].addEventListener("click", () => {
      for (const el of changedElements) {
        el.style.color = colors2[x].style.backgroundColor;
      }
      
      download.style.backgroundColor = colors2[x].style.backgroundColor;
      about.style.backgroundColor = colors2[x].style.backgroundColor;
    });
  }
  
