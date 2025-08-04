const container = document.querySelector('#container');
let grid = 16;

document.addEventListener('DOMContentLoaded', () =>  {
    for (i = 0; i < (grid * grid); i++ ) {
        console.log("creating")
        const cellWidth = Math.round((100 / grid) * 100) / 100;
        const cell = document.createElement('div');
        cell.style.flex = `1 0 ${cellWidth}%` 
        cell.style.border = '1px solid black';

        container.appendChild(cell);
    }
})