const container = document.querySelector('.container');

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        const gridPoint = document.createElement('div');
        container.append(gridPoint);
        gridPoint.classList.add('off');
    }
}

const gridPoints = document.querySelectorAll('.container > div');

gridPoints.forEach((gridPoint) => {
    gridPoint.addEventListener('mouseenter', () => {
        gridPoint.classList.add('on');
    })
    gridPoint.addEventListener('mouseleave', () => {
        gridPoint.classList.remove('on');
    })
})