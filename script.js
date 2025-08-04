const container = document.querySelector('#container');
const createButton = document.querySelector('#create');
const MAX_SIZE = 900

function sketch(cell) {
    cell.style.backgroundColor = 'slategrey';
}

function createGrid(grid) {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    const cellWidth = 100 / grid;
    const cellHeight = parseInt(MAX_SIZE / grid);
    for (i = 0; i < (grid * grid); i++ ) {
        createCell(cellWidth, cellHeight);
    }
}

function createCell(cellWidth, cellHeight) {
    const cell = document.createElement('div');
    cell.style.flex = `1 0 ${cellWidth}%`
    cell.style.height = `${cellHeight}px`; 
    cell.style.border = '1px solid black';  
    container.appendChild(cell);
    cell.addEventListener('mouseover', () => {
        sketch(cell);
    });
}

document.addEventListener('DOMContentLoaded', () =>  {
    createGrid(16);
    createButton.addEventListener('click', () => {
        const userInput = prompt("Enter grid size from 1 to 100:", "16");
        const grid = parseInt(userInput);
        if (grid === NaN || grid < 1 || grid > 100) {
            alert("Please enter a number between 1 and 100")
        } else {
            createGrid(grid);
        }
    });
})