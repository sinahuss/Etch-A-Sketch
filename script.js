const container = document.querySelector('.container');
const sizeButton = document.getElementById('size');
const resetButton = document.getElementById('reset');
var ROWS = 4;

//8070ac

function setGrid(ROWS) {

    let color = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    for (let i = 0; i < ROWS * ROWS; i++) {

        const gridPoint = document.createElement('div');

        gridPoint.classList.add('gridPoint');
        gridPoint.style.filter = 'brightness(0) invert(1)';
        gridPoint.style.backgroundColor = color;

        container.append(gridPoint);

        let brightness = 0;
        gridPoint.addEventListener('mouseenter', () => {
            brightness += 0.1;
            gridPoint.style.filter = 'brightness(' + brightness + ') invert(1)';
        });
    }

    container.style.gridTemplateColumns = 'repeat(' + ROWS + ', auto)';
}

function reset() {

    const gridPoints = document.querySelectorAll('.container > div');

    gridPoints.forEach(gridPoint => {
        container.removeChild(gridPoint);
    });
}

setGrid(ROWS);

//prompt('number');

sizeButton.addEventListener('click', () => {

    ROWS = prompt('Set the number of squares on each side');

    reset();

    setGrid(ROWS);
});

resetButton.addEventListener('click', () => {

    reset();

    setGrid(ROWS);
});




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