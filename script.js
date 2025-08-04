const container = document.querySelector('#container');
const MAX_WIDTH = 900
let grid = 16;

function sketch(cell) {
    cell.style.backgroundColor = 'black';
}

document.addEventListener('DOMContentLoaded', () =>  {
    for (i = 0; i < (grid * grid); i++ ) {
        console.log("creating")
        const cellWidth = 100 / grid;
        const cellHeight = parseInt(MAX_WIDTH / grid);
        const cell = document.createElement('div');
        cell.style.flex = `1 0 ${cellWidth}%`
        cell.style.height = `${cellHeight}px`; 
        cell.style.border = '1px solid black';  
        container.appendChild(cell);
        cell.addEventListener('mouseover', () => {
            sketch(cell);
        });
    }
})