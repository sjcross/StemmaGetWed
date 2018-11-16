function getColour(hue,saturation,lightness) {
  var colour = 'hsl(';
  colour = colour + hue + ',';
  colour = colour + saturation + '%,';
  colour = colour + lightness + '%';
  colour = colour + ')';

  return colour;

}
