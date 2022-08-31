const container = document.querySelector('.container');
const sizeButton = document.getElementById('size');
var ROWS = 8;

for (let i = 0; i < ROWS * ROWS; i++) {
    const gridPoint = document.createElement('div');
    container.append(gridPoint);
    gridPoint.classList.add('off');
}

container.style.gridTemplateColumns = 'repeat(' + ROWS + ', auto)';

//prompt('number');

var gridPoints = document.querySelectorAll('.container > div');

sizeButton.addEventListener('click', () => {

    ROWS = prompt('number');
    gridPoints.forEach(gridPoint => {
        container.removeChild(gridPoint);
    })

    for (let i = 0; i < ROWS * ROWS; i++) {
        const gridPoint = document.createElement('div');
        container.append(gridPoint);
        gridPoint.classList.add('off');
    }

    container.style.gridTemplateColumns = 'repeat(' + ROWS + ', auto)';
})





gridPoints.forEach(gridPoint => {

    gridPoint.addEventListener('mouseenter', () => {
        gridPoint.classList.toggle('on');
        gridPoint.classList.toggle('off');
    })
    gridPoint.addEventListener('mouseleave', () => {
        gridPoint.classList.toggle('on');
        gridPoint.classList.toggle('off');
    })
})

//console.log(window.getComputedStyle(container).width);