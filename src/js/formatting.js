const baseHueBlue = 202;
const baseHueYellow = 33;
const baseSaturation = 51;


// Change plain tile colour
function changeTileColour() {
  var plainElementsBlue = document.getElementsByClassName("plain-tile-blue");
  for (var i = 0; i < plainElementsBlue.length; i++) {
    plainElementsBlue[i].setAttribute("style", "background-color: " + getColour(baseHueBlue, baseSaturation, (50 + Math.random() * 40)));
  }

  var plainElementsYellow = document.getElementsByClassName("plain-tile-yellow");
  for (var i = 0; i < plainElementsYellow.length; i++) {
    plainElementsYellow[i].setAttribute("style", "background-color: " + getColour(baseHueYellow, baseSaturation, (70 + Math.random() * 20)));
  }

  const textElements = document.getElementsByClassName("text-tile");
  for (i = 0; i < textElements.length; i++) {
    textElements[i].setAttribute("style", "background-color: " + getColour(baseHueBlue, baseSaturation, (70 + Math.random() * 20)));
  }
}

// Randomly set tile images
function randomiseTileImages() {
  const folder = "../../img/200_tiles/";
  const tileNames = shuffle(["Tile1.png", "Tile2.png", "Tile4.png", "Tile5.png", "Tile6.png", "Tile7.png", "Tile8.png", "Tile9.png", "Tile10.png", "Tile11.png"]);

  const elements = document.getElementsByClassName("image-tile");
  for (var i = 0; i < elements.length; i++) {
    // var idx = Math.floor(Math.random()*(tileNames.length));
    elements[i].setAttribute("data-cover", folder + tileNames[i]);
  }
}

// Randomly set tile images
function randomisePlainTileImages() {
  const folder = "../../img/200_tiles/";

  var tileNames = ["TilePlainBlue1.png", "TilePlainBlue2.png", "TilePlainBlue3.png", "TilePlainBlue4.png", "TilePlainBlue5.png", "TilePlainBlue6.png"];
  var elements = document.getElementsByClassName("plain-tile-blue");
  for (var i = 0; i < elements.length; i++) {
    const idx = Math.floor(Math.random()*(tileNames.length));
    elements[i].setAttribute("data-cover", folder + tileNames[idx]);
  }

  tileNames = ["TilePlainYellow1.png", "TilePlainYellow2.png", "TilePlainYellow3.png", "TilePlainYellow4.png", "TilePlainYellow5.png", "TilePlainYellow6.png"];
  elements = document.getElementsByClassName("plain-tile-yellow");
  for (var i = 0; i < elements.length; i++) {
    const idx = Math.floor(Math.random()*(tileNames.length));
    elements[i].setAttribute("data-cover", folder + tileNames[idx]);
  }

  elements = document.getElementsByClassName("blank-overlay");
  for (var i = 0; i < elements.length; i++) {
    elements[i].setAttribute("style", "opacity: " + (0.3 + (Math.random()*0.4)));
  }
}

// changeTileColour();
// randomiseTileImages();
randomisePlainTileImages();
