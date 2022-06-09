//Create the function makeGrid that takes the parameter n and draws a nXn grid of square divs
//Declare makeGrid function
function makeGrid(n=16){
    //Create an empty string variable htmlDivs
    let htmlDivs = '';
    //For i starting from 1 to n
    for(let i=1;i<=n;i++){
        //Append '<div class="row">' to htmlDivs
        htmlDivs+='<div class="row">';
        //For j starting from 1 to n
        for(let j=1;j<=n;j++){
            //Append '<div class="cell"></div>' to htmlDivs
            htmlDivs+='<div class="cell"></div>';
        }
        //Close the div
        htmlDivs+='</div>';
    }
    //Append htmlDivs to gridContainer
    gridContainer.innerHTML+= htmlDivs;
}
//Create variable gridContainer that stores the grids-container div 
const gridContainer = document.querySelector('.grids-container');
//Call the function makeGrid
makeGrid();

