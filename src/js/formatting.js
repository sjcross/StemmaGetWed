const baseHue = 225;
const baseSaturation = 60;

// Change plain tile colour
function changeTileColour(baseHue, baseSaturation) {
  const plainElements = document.getElementsByClassName("plain-tile");
  for (var i = 0; i < plainElements.length; i++) {
    plainElements[i].setAttribute("style", "background-color: " + getColour(baseHue, baseSaturation, (50 + Math.random() * 40)));
  }

  const textElements = document.getElementsByClassName("text-tile");
  for (var i = 0; i < textElements.length; i++) {
    textElements[i].setAttribute("style", "background-color: " + getColour(baseHue, baseSaturation, (70 + Math.random() * 20)));
  }
}

// Randomly set tile images
function randomiseTileImages() {
  const folder = "../../img/256_tiles/";
  const tileNames = shuffle(["Tile1.png", "Tile2.png", "Tile3.png"], "Tile4.png");

  const elements = document.getElementsByClassName("image-tile");
  for (var i = 0; i < elements.length; i++) {
    elements[i].setAttribute("data-cover", folder + tileNames[i]);
  }
}

changeTileColour(baseHue,baseSaturation);
randomiseTileImages();
