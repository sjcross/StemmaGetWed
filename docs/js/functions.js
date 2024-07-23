function shuffle(array) {
  var i = array.length;
  var j = 0;
  var temp;

  while (i--) {
    j = Math.floor(Math.random() * (i+1));

    // swap randomly chosen element with current element
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;

  }

  return array;

}

function getColour(hue,saturation,lightness) {
  var colour = 'hsl(';
  colour = colour + hue + ',';
  colour = colour + saturation + '%,';
  colour = colour + lightness + '%';
  colour = colour + ')';

  return colour;

}
