const container = document.querySelector('#container');
const createButton = document.querySelector('#create');
const MAX_SIZE = 900

function sketch(cell) {
    if (!cell.hasAttribute('data-color')) {
        const random = Math.floor(Math.random() * 5);
        cell.setAttribute('data-color', random);
        cell.setAttribute('data-opacity', "0.1");
    } else {
        const currentOpacity = parseFloat(cell.dataset.opacity);
        if (currentOpacity != 1) {  
            const newOpacity = currentOpacity + 0.1;
            cell.setAttribute('data-opacity', String(newOpacity));
        }
    }
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