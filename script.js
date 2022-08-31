const container = document.querySelector('.container');
var ROWS = prompt('number');


container.style.gridTemplateColumns = 'repeat(' + ROWS + ', auto)';

for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < ROWS; j++) {
        const gridPoint = document.createElement('div');
        container.append(gridPoint);
        gridPoint.classList.add('off');
    }
}

const gridPoints = document.querySelectorAll('.container > div');

gridPoints.forEach((gridPoint) => {

    gridPoint.addEventListener('mouseenter', () => {
        gridPoint.classList.toggle('on');
    })
    gridPoint.addEventListener('mouseleave', () => {
        gridPoint.classList.toggle('on');
    })
})

console.log(window.getComputedStyle(container).width);