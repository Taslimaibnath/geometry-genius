function calculateParallelogramArea(){

    // calculate base 
    const baseInput = document.getElementById('parallelogram-base');
    const baseText = baseInput.value ;
    const base = parseFloat(baseText);
    console.log(base)
    // const base = getParallelogramBase();
    // console.log(base);

    // calculate height 
    const heightInput = document.getElementById('parallelogram-height');
    const heightText = heightInput.value ;
    const height = parseFloat(heightText);
    console.log(height)


    // calculate the area

    const area = base * height;
    console.log('area of the parallelogram ', area);

    // display the area

    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = area;
}


// function getParallelogramBase(){
//     const baseInput = document.getElementById('parallelogram-base');
//     const baseText = baseInput.value ;
//     const base = parseFloat(baseText);
//     console.log(base);
//     return base ;
// }