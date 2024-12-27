// function calculateParallelogramArea(){

//     const base = getParallelogramBase();
//     console.log(base);

// function getParallelogramBase(){
//     const baseInput = document.getElementById('parallelogram-base');
//     const baseText = baseInput.value ;
//     const base = parseFloat(baseText);
//     console.log(base);
//     return base ;
// }
// }

function calculateParallelogramArea() {
    // base calculate 
  const base = getInputValueById("parallelogram-base");
  // console.log('base value ', base);
//   height 
  const height = getInputValueById("parallelogram-height");
// full area  calculation 
  const area = base * height;
  console.log('area of the parallelogram is ', area);
//  display area

setInnerTextById('parallelogram-area', area)

}

function getInputValueById(inputFieldId) {
  const inputFieldId = document.getElementById(inputFieldId);
  const inputValueText = inputFieldId.value;
  const inputValue = parseFloat(inputValue);
  return inputValue;
}

// display 
function setInnerTextById(elementId , area){
const element = document.getElementById(elementId);
element.innerText = area ;
}
