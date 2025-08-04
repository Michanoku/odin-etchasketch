const container = document.querySelector('#container');
const MAX_SIZE = 900

function sketch(cell) {
    cell.style.backgroundColor = 'slategrey';
}

function createGrid(grid) {
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
})