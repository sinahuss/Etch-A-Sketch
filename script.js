const container = document.querySelector('.container');
const sizeButton = document.getElementById('size');
const resetButton = document.getElementById('reset');
var ROWS = 4;

//First chooses a random color, then creates grid points depending on how many
//rows are input by user. Enables an event listener for each grid point that
//increases color brightness for each mouse enter.
function setGrid(ROWS) {

    let color = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    for (let i = 0; i < ROWS * ROWS; i++) {

        const gridPoint = document.createElement('div');

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

//removes all grid points and adds them again to refresh the color values
function reset() {

    const gridPoints = document.querySelectorAll('.container > div');

    gridPoints.forEach(gridPoint => {
        container.removeChild(gridPoint);
    });
}

setGrid(ROWS);

sizeButton.addEventListener('click', () => {

    ROWS = prompt('Set the number of squares on each side');

    if (isNaN(ROWS) || ROWS <= 0 || ROWS > 100) {
        alert('Please enter a number between 0 and 100')
        return;
    }

    reset();

    setGrid(ROWS);
});

resetButton.addEventListener('click', () => {

    reset();

    setGrid(ROWS);
});