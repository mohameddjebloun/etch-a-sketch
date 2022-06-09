//Create the function makeGrid that takes the parameter n and draws a nXn grid of square divs
//Declare makeGrid function
function makeGrid(n=16){
    //Create an empty string variable htmlDivs
    let htmlDivs = '';
    //For i starting from 1 to n*n
    for(let i=1;i<=n*n;i++){
        //Append '<div class="cell"></div>' to htmlDivs
        htmlDivs+='<div class="cell"></div>';
        }
    //Append htmlDivs to gridContainer
    gridContainer.innerHTML+= htmlDivs;
    //Use css variables
    gridContainer.style.setProperty('--grid-rows', n);
    gridContainer.style.setProperty('--grid-cols', n);
}
//Create variable gridContainer that stores the grids-container div 
const gridContainer = document.querySelector('.grids-container');
//Call the function makeGrid
makeGrid();