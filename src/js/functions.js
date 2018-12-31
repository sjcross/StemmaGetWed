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

// /*
//  * Replace all SVG images with inline SVG
//  */
// jQuery('img.svg').each(function(){
//   var $img = jQuery(this);
//   var imgID = $img.attr('id');
//   var imgClass = $img.attr('class');
//   var imgURL = $img.attr('src');
//   var style = $img.attr('style');
//
//   jQuery.get(imgURL, function(data) {
//     // Get the SVG tag, ignore the rest
//     var $svg = jQuery(data).find('svg');
//
//     // Add replaced image's ID to the new SVG
//     if(typeof imgID !== 'undefined') {
//       $svg = $svg.attr('id', imgID);
//     }
//
//     // Add replaced image's classes to the new SVG
//     if(typeof imgClass !== 'undefined') {
//       $svg = $svg.attr('class', imgClass+' replaced-svg');
//     }
//
//     // Remove any invalid XML tags as per http://validator.w3.org
//     $svg = $svg.removeAttr('xmlns:a');
//
//     // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
//     if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
//       $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
//     }
//
//     // Replace image with new SVG
//     $img.replaceWith($svg);
//
//   }, 'xml');
//
// });
