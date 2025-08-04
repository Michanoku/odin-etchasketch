const container = document.querySelector('#container');
const createButton = document.querySelector('#create');
const MAX_SIZE = 900

function sketch(cell) {
    if (!cell.hasAttribute('data-color')) {
        const random = Math.floor(Math.random() * 5);
        let color;  
        switch (random) {
            case 0:
                color = '#355070';
                break;
            case 1:
                color = '#6D597A';
                break;
            case 2:
                color = '#B56576';
                break;
            case 3:
                color = '#E56B6F';
                break;
            case 4:
                color = '#EAAC8B';
                break;
        }
        cell.setAttribute('data-color', color);
        cell.style.backgroundColor = color;
    }
    if (!cell.hasAttribute('data-opacity')) {
        cell.setAttribute('data-opacity', "0.1");
    } else {
        const currentOpacity = parseFloat(cell.dataset.opacity);
        console.log("current");
        console.log(currentOpacity)
        if (currentOpacity != 1) {  
            const newOpacity = currentOpacity + 0.1;
            console.log("new")
            console.log(newOpacity)
            cell.setAttribute('data-opacity', String(newOpacity));
        }
    }
    console.log(cell.dataset.opacity)
    cell.style.opacity = cell.dataset.opacity;
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