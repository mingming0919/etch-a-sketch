// mouse click
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

//CREATE 16x16 grid

const main_content = document.querySelector('#main-content');

for(i = 1; i <= 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    row.setAttribute('id', 'row');   
    main_content.appendChild(row);
    for(j = 1; j <= 16; j++) {
        const content = document.createElement('div');
        content.classList.add('tile');
        content.setAttribute('id', 'tile');   
        row.appendChild(content);
    }
}

//ONCLICK HANDLER - change color of tile on click
const tiles = document.querySelectorAll('#tile');
const eraserButton = document.querySelector('#eraserButton');

let isEraserToggled = false;

eraserButton.addEventListener('click', () => {
    isEraserToggled = !isEraserToggled;

    if (isEraserToggled) {
        eraserButton.style.backgroundColor = "#3c7fd1";
    } else {
        eraserButton.style.backgroundColor = "#5E81AC";
    }
});

        tiles.forEach((tile) => {
            tile.addEventListener('mousedown', changeColor);

            tile.addEventListener('mouseover', function () {
                if (mouseDown) {
                    changeColor.call(this);
                  }
            });
        });
    

//CLEAR BUTTON - clears the content of the grid
const clearButton = document.querySelector('#clearButton');

clearButton.addEventListener('click', () => {
    tiles.forEach((tile) => {
        tile.classList.remove('clicked'); 
});
});

function changeColor() {
    if (isEraserToggled) {
        this.classList.remove('clicked');
    } else {
        this.classList.add('clicked');
    }
}

