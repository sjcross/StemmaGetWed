const baseHue = 202;
const baseSaturation = 51;


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
  const folder = "../../img/200_tiles/";
  const tileNames = shuffle(["Tile1.png", "Tile2.png", "Tile4.png", "Tile5.png", "Tile6.png", "Tile7.png", "Tile8.png"]);

  const elements = document.getElementsByClassName("image-tile");
  for (var i = 0; i < elements.length; i++) {
    // var idx = Math.floor(Math.random()*(tileNames.length));
    elements[i].setAttribute("data-cover", folder + tileNames[i]);
  }
}

// Randomly set tile images
function randomisePlainTileImages() {
  const folder = "../../img/200_tiles/";
  const tileNames = ["TilePlain1.png", "TilePlain2.png", "TilePlain3.png", "TilePlain4.png", "TilePlain5.png", "TilePlain6.png"];

  var elements = document.getElementsByClassName("plain-tile");
  for (var i = 0; i < elements.length; i++) {
    var idx = Math.floor(Math.random()*(tileNames.length));
    elements[i].setAttribute("data-cover", folder + tileNames[idx]);
  }

  elements = document.getElementsByClassName("blank-overlay");
  for (var i = 0; i < elements.length; i++) {
    elements[i].setAttribute("style", "opacity: " + (Math.random()*0.75));
  }
}

changeTileColour(baseHue,baseSaturation);
randomiseTileImages();
randomisePlainTileImages();
