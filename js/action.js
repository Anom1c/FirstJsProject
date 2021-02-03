$(document).ready(function () {
    let canvas;
    let ctx;
    let x;
    let y;
    let sideSize = 30;
    let snakePart = {x: 0, y: 0};
    console.log(`Window Ready`);

    function init() {
        canvas = $("#myCanvas");
        ctx = canvas[0].getContext('2d');
        x = canvas.width() / 2;
        y = canvas.height() / 2;
        snakePart.x = x;
        snakePart.y = y;
        drawRect(snakePart);
        window.addEventListener("keydown", update, false);
        render();
    }

    /**
     *
     * @param {{x: number, y: number}}snakePart
     */
    function drawRect(snakePart) {
        console.log('drawRect was called with x - %d, y - %d', snakePart.x, snakePart.y);
        ctx.fillStyle = '#666';
        ctx.fillRect(snakePart.x, snakePart.y, sideSize, sideSize);
    }

    $(window).on('load', function () {
        console.log(`onload called`);
        init();
    });

    function
    update(event) {
        if (event.keyCode == 38) {
            snakePart.y -= sideSize; //going up
        }
        if (event.keyCode == 40) {
            snakePart.y += sideSize; //going down
        }
        if (event.keyCode == 37) {
            snakePart.x -= sideSize; //going left
        }
        if (event.keyCode == 39) {
            snakePart.x += sideSize; //going right
        }
        render();
    }

    function render() {
        ctx.clearRect(0, 0, 600, 600);
        drawRect(snakePart);


    }
    setInterval(function (){
        snakePart.x -= sideSize;
    },2000)
});
