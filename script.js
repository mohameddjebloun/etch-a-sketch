//Create the function makeGrid that takes the parameter n and draws a nXn grid of square divs
//Declare makeGrid function
function makeGrid(n=16){
    //Reset the grid container
    gridContainer.innerHTML = '';
    //Create an empty string variable htmlDivs
    let htmlDivs = '';
    //For i starting from 1 to n*n
    for(let i=1;i<=n*n;i++){
        //Append '<div class="cell"></div>' to htmlDivs
        htmlDivs+='<div class="cell"></div>';
        }
    //Append htmlDivs to gridContainer
    gridContainer.innerHTML+= htmlDivs;
    //Create the grid using css styles
    gridContainer.style.display ='grid';
    gridContainer.style.gridTemplateRows= `repeat(${n}, 1fr)`;
    gridContainer.style.gridTemplateColumns= `repeat(${n}, 1fr)`;
    //Create a variable cells where you store all the grid cells
    const cells = document.querySelectorAll('.cell');
    //For each cell add a hover event listener
    cells.forEach(cell => {
        cell.addEventListener('mouseenter',()=>{
            //Change cell's background color to black
            cell.classList.add('black');
        })
    });
}
//Create variable gridContainer that stores the grids-container div 
const gridContainer = document.querySelector('.grids-container');
//Call the function makeGrid
makeGrid();
//Create a variable button for the button element
const button = document.querySelector('button');
//Add an event listener to the button that prompts the user for a number between 1 and 100
button.addEventListener('click',function changeGrid(){
    let newSize = prompt("Give a number between 1 and 100");
    //Check if the input is a number and is between 1 and 100
    if((typeof(+newSize)===typeof(1)) &&((+newSize >=1)&&(+newSize<=100))){
        //Create a new grid newSizeXnewSize
        makeGrid(+newSize);
    }
    else{
        //Prompt the user again
        return changeGrid();
    }
})