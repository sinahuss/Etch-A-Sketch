const container = document.querySelector('.container');
const sizeButton = document.getElementById('size');
var ROWS = 4;

function setGrid() {
    
    for (let i = 0; i < ROWS * ROWS; i++) {
        const gridPoint = document.createElement('div');
        gridPoint.classList.add('off');

        gridPoint.addEventListener('mouseenter', () => {
            gridPoint.classList.toggle('on');
            gridPoint.classList.toggle('off');
        });
        gridPoint.addEventListener('mouseleave', () => {
            gridPoint.classList.toggle('on');
            gridPoint.classList.toggle('off');
        });

        container.append(gridPoint);
    }

    container.style.gridTemplateColumns = 'repeat(' + ROWS + ', auto)';
}

setGrid();

//prompt('number');

sizeButton.addEventListener('click', () => {

    const gridPoints = document.querySelectorAll('.container > div');

    ROWS = prompt('number');
    gridPoints.forEach(gridPoint => {
        container.removeChild(gridPoint);
    })

    setGrid();
})




/* container.addEventListener('mouseenter', e => {
    e.target.classList.toggle('on');
})
container.addEventListener('mouseleave', e => {
    e.target.classList.toggle('on');
}) */


/* document.querySelectorAll('.container > div').forEach(gridPoint => {

    gridPoint.addEventListener('mouseenter', () => {
        gridPoint.classList.toggle('on');
        gridPoint.classList.toggle('off');
    })
    gridPoint.addEventListener('mouseleave', () => {
        gridPoint.classList.toggle('on');
        gridPoint.classList.toggle('off');
    })
}) */

//console.log(window.getComputedStyle(container).width);