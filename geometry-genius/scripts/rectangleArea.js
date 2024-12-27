function calculateRectangleArea() {
  // length of the rectangle
  const lengthInput = document.getElementById("rectangle-length");
  const rectangleText = lengthInput.value;
  const length = parseFloat(rectangleText);
  console.log(length);

  //  get width of rectangle

  const widthInput = document.getElementById("rectangle-width");
  const widthText = widthInput.value;
  const width = parseFloat(widthText);
  console.log(width);

//   calculate the area

const area = length * width
console.log( 'area of the rectangle :', area);


// display rectangle area
const rectangleAreaSpan = document.getElementById('rectangle-area');
rectangleAreaSpan.innerText = area ;
}
