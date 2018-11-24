// Could move the core functions to a separate JS file

var baseHue = 225;
var baseSaturation = 60;

// Change plain tile colour
var elements = document.getElementsByClassName("plain-tile");
for (var i=0;i<elements.length;i++) {
  elements[i].setAttribute("style","background-color: "+getColour(baseHue,baseSaturation,(50+Math.random()*40)));
}

// Change plain tile colour
var elements = document.getElementsByClassName("text-tile");
for (var i=0;i<elements.length;i++) {
  elements[i].setAttribute("style","background-color: "+getColour(baseHue,baseSaturation,(70+Math.random()*20)));
}

// Randomly set tile images
var folder = "img/256_tiles/";
var tileNames = shuffle(["Tile1.png","Tile2.png","Tile3.png"]);

var elements = document.getElementsByClassName("tile-image-tile");
for (var i=0;i<elements.length;i++) {
  elements[i].setAttribute("data-cover",folder+tileNames[i]);
}
