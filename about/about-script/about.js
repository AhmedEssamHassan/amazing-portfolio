const colorsContainer2 = document.querySelector(".colors");
const colors2 = colorsContainer2.querySelectorAll("li");
const download = document.querySelector(".download");
const about = document.querySelector(".about");

const cyrcles = document.querySelectorAll(".cyrcle");
let z;
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

    for (let c = 0; c <cyrcles.length; c++) {
      switch (c) {
        case 0:
          cyrcles[c].style.borderImage = `linear-gradient(44deg, rgba(34,34,34,1) 75%, ${colors2[x].style.backgroundColor} 25%)`;
          cyrcles[c].style.borderImageSlice = "5";
          break;
        case 1:
          cyrcles[c].style.borderImage = `linear-gradient(44deg, rgba(34,34,34,1) 30%, ${colors2[x].style.backgroundColor} 25%)`;
          cyrcles[c].style.borderImageSlice = "5";
        case 2:
          cyrcles[c].style.borderImage = `linear-gradient(44deg, rgba(34,34,34,1) 11%, ${colors2[x].style.backgroundColor} 25%)`;
          cyrcles[c].style.borderImageSlice = "5";
        case 3:
          cyrcles[c].style.borderImage = `linear-gradient(44deg, rgba(34,34,34,1) 46%, ${colors2[x].style.backgroundColor} 25%)`;
          cyrcles[c].style.borderImageSlice = "5";
        case 4:
          cyrcles[c].style.borderImage = `linear-gradient(44deg, rgba(34,34,34,1) 34%, ${colors2[x].style.backgroundColor} 25%)`;
          cyrcles[c].style.borderImageSlice = "5";
        case 5:
          cyrcles[c].style.borderImage = `linear-gradient(44deg, rgba(34,34,34,1) 5%, ${colors2[x].style.backgroundColor} 25%)`;
          cyrcles[c].style.borderImageSlice = "5";
        case 6:
          cyrcles[c].style.borderImage = `linear-gradient(44deg, rgba(34,34,34,1) 50%, ${colors2[x].style.backgroundColor} 25%)`;
          cyrcles[c].style.borderImageSlice = "5";
        case 7:
          cyrcles[c].style.borderImage = `linear-gradient(44deg, rgba(34,34,34,1) 35%, ${colors2[x].style.backgroundColor} 25%)`;
          cyrcles[c].style.borderImageSlice = "5";
      }

    }

    download.style.backgroundColor = colors2[x].style.backgroundColor;
    about.style.backgroundColor = colors2[x].style.backgroundColor;
  });
}

const siwtchColors = () => {
  for (let x = 0; x < cyrcles.length; x++) {
    switch (x) {
      case 0:
        z=75;
        cyrcles[
          x
        ].style.borderImage = `linear-gradient(44deg, rgba(34,34,34,1) ${z}%, rgba(255,179,0,1) 25%)`;
        cyrcles[x].style.borderImageSlice = "5";
        break;
      case 1:
        z=30;
        cyrcles[
          x
        ].style.borderImage = `linear-gradient(44deg, rgba(34,34,34,1) ${z}%, rgba(255,179,0,1) 25%)`;
        cyrcles[x].style.borderImageSlice = "5";
        break;
      case 2:
        z=11;
        cyrcles[
          x
        ].style.borderImage = `linear-gradient(44deg, rgba(34,34,34,1) ${z}%, rgba(255,179,0,1) 0%)`;
        cyrcles[x].style.borderImageSlice = "5";
        break;
      case 3:
        z=46;
        cyrcles[
          x
        ].style.borderImage = `linear-gradient(44deg, rgba(34,34,34,1) ${z}%, rgba(255,179,0,1) 25%)`;
        cyrcles[x].style.borderImageSlice = "5";
        break;
      case 4:
        z=34;
        cyrcles[
          x
        ].style.borderImage = `linear-gradient(44deg, rgba(34,34,34,1) ${z}%, rgba(255,179,0,1) 25%)`;
        cyrcles[x].style.borderImageSlice = "5";
        break;
      case 5:
        z=5;
        cyrcles[
          x
        ].style.borderImage = `linear-gradient(44deg, rgba(34,34,34,1) ${z}%, rgba(255,179,0,1) 2%)`;
        cyrcles[x].style.borderImageSlice = "5";
        break;
      case 6:
        z=50;
        cyrcles[
          x
        ].style.borderImage = `linear-gradient(44deg, rgba(34,34,34,1) ${z}%, rgba(255,179,0,1) 25%)`;
        cyrcles[x].style.borderImageSlice = "5";
        break;
      case 7:
        z=35;
        cyrcles[
          x
        ].style.borderImage = `linear-gradient(44deg, rgba(34,34,34,1) ${z}%, rgba(255,179,0,1) 5%)`;
        cyrcles[x].style.borderImageSlice = "5";
        break;
    }
  }
};

siwtchColors();
