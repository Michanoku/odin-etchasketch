// Initialize nodes and max size of the grid
const container = document.querySelector('#container');
const createButton = document.querySelector('#create');
const MAX_SIZE = 900

// This function is called when a cell is hovered over.
// It sets an initial color the first time and increases opacity after.
function sketch(cell) {
    if (!cell.hasAttribute('data-color')) {
        // Give the color a number between 1-5
        const random = Math.floor(Math.random() * 5);
        cell.setAttribute('data-color', random);
        // Set initial opacity
        cell.setAttribute('data-opacity', "0.1");
    } else {
        // Check current opacity and if not at max yet, add more.
        const currentOpacity = parseFloat(cell.dataset.opacity);
        if (currentOpacity != 1) {  
            const newOpacity = currentOpacity + 0.1;
            cell.setAttribute('data-opacity', String(newOpacity));
        }
    }
    // Create the color with the current opacity and the cells initial color
    switch (cell.dataset.color) {
        case "0":
            cell.style.backgroundColor = `rgba(53, 80, 112, ${cell.dataset.opacity})`;
            break;
        case "1":
            cell.style.backgroundColor = `rgba(109, 89, 122, ${cell.dataset.opacity})`;
            break;
        case "2":
            cell.style.backgroundColor = `rgba(181, 101, 118, ${cell.dataset.opacity})`;
            break;
        case "3":
            cell.style.backgroundColor = `rgba(229, 107, 111, ${cell.dataset.opacity})`;
            break;
        case "4":
            cell.style.backgroundColor = `rgba(234, 172, 139, ${cell.dataset.opacity})`;
            break;
    }
} 

// This function creates a grid of cells
function createGrid(grid) {
    // First remove the old grid
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    // Calculate needed sizes for the new cells
    const cellWidth = 100 / grid;
    const cellHeight = parseInt(MAX_SIZE / grid);
    // Create the grid
    for (i = 0; i < (grid * grid); i++ ) {
        createCell(cellWidth, cellHeight);
    }
}

// This function creates a cell in the grid, using width and height as provided
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
    // Create initial grid of 16
    createGrid(16);
    // Event listener for the button to create a new grid
    createButton.addEventListener('click', () => {
        // Prompt the user for their desired grid size, but make sure no bogus values are entewred
        const userInput = prompt("Enter grid size from 1 to 100:", "16");
        const grid = parseInt(userInput);
        if (isNaN(grid) || grid < 1 || grid > 100) {
            alert("Please enter a number between 1 and 100")
        } else {
            createGrid(grid);
        }
    });
})