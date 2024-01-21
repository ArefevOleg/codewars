// Description
// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

// Decision: 

function getSize(width, height, depth) {
  var area = 2 * ((width * height) + (width * depth) + (height * depth));
  var volume = width * height * depth;
 return [area, volume];
};