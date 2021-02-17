$(document).ready(function () {
    let canvas;
    let ctx;
    let snakeSize;
    let snakePart = {x: 0, y: 0};
    let fieldSize ;
    let direction ;
    let actionTimeOut;
    console.log(`Window Ready`);

    function init() {
        canvas = $("#myCanvas");
        ctx = canvas[0].getContext('2d');
        fieldSize = canvas.width();
        snakeSize = fieldSize / 20;
        snakePart.x = fieldSize / 2;
        snakePart.y = fieldSize / 2;
        direction = left;
        drawRect(snakePart);
        window.addEventListener("keydown", update, false);
        const triggerSnake = document.querySelector("#stopSnake")
        // triggerSnake.addEventListener("click", run, false);
        render();
        run();

    }
    function moveSnakePart(){
        direction(snakePart);
        render();
        checkForBorder(snakePart);
    }


    function run(){
         actionTimeOut = setTimeout(function (){
            moveSnakePart();
            run();
        },250);

    }
    /**
     *
     * @param {{x: number, y: number}}snakePart
     */
    function drawRect(snakePart) {
        console.log('drawRect was called with x - %d, y - %d', snakePart.x, snakePart.y);
        ctx.fillStyle = '#666';
        ctx.fillRect(snakePart.x, snakePart.y, snakeSize, snakeSize);
    }

    $(window).on('load', function () {
        console.log(`onload called`);
        init();
    });

    function update(event) {
        if (event.keyCode == 38) {
            direction = up; //going up
        }
        if (event.keyCode == 40) {
            direction = down; //going down
        }
        if (event.keyCode == 37) {
            direction = left; //going left
        }
        if (event.keyCode == 39) {
            direction = right; //going right
        }
        render();

    }

    function render() {
        ctx.clearRect(0, 0, 600, 600);
        drawRect(snakePart);

    }
    function checkForBorder(snakePart) {
        console.log(snakePart.x)
        if (snakePart.x === fieldSize - snakeSize || snakePart.x === 0 ||
            snakePart.y === fieldSize - snakeSize || snakePart.y === 0)
        {
            clearTimeout(actionTimeOut);
            return alert("Snake faced with border");
        }
    }


    function up(snakePart){
        snakePart.y = snakePart.y - snakeSize ;
        return snakePart;
    }
    function down(snakePart){
        snakePart.y = snakePart.y + snakeSize
        return snakePart;
    }
    function left(snakePart){
        snakePart.x = snakePart.x - snakeSize;
        return snakePart;
    }
    function right(snakePart){
        snakePart.x = snakePart.x + snakeSize;
        return snakePart;
    }

});