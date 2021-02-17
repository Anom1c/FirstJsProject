$(document).ready(function () {
    let canvas;
    let ctx;
    let snakeSideLength;
    let snakeHead = {x: 0, y: 0};
    let fieldSize ;
    let directionFn ;
    let actionInterval;
    console.log(`Window Ready`);

    function init() {
        canvas = $("#myCanvas");
        ctx = canvas[0].getContext('2d');
        fieldSize = canvas.width();
        snakeSideLength = fieldSize / 20;
        snakeHead.x = fieldSize / 2;
        snakeHead.y = fieldSize / 2;
        directionFn = left;
        drawRect(snakeHead);
        window.addEventListener("keydown", update, false);
        const triggerSnake = document.querySelector("#stopSnake")
        // triggerSnake.addEventListener("click", run, false);
        run();

    }
    function moveSnakePart(){
        directionFn(snakeHead);
        if (checkForBorder(snakeHead)) {
            render();
        }

    }


    function run(){
         actionInterval = setInterval(function (){
            moveSnakePart();
       //     run();
        },200);
        console.log('created timeout === ', actionInterval);
    }
    /**
     *
     * @param {{x: number, y: number}}snakePart
     */
    function drawRect(snakePart) {
        console.log('drawRect was called with x - %d, y - %d', snakePart.x, snakePart.y);
        ctx.fillStyle = '#666';
        ctx.fillRect(snakePart.x, snakePart.y, snakeSideLength, snakeSideLength);
    }

    $(window).on('load', function () {
        console.log(`onload called`);
        init();
    });

    function update(event) {
        if (event.keyCode == 38) {
            directionFn = up; //going up
        }
        if (event.keyCode == 40) {
            directionFn = down; //going down
        }
        if (event.keyCode == 37) {
            directionFn = left; //going left
        }
        if (event.keyCode == 39) {
            directionFn = right; //going right
        }
    //    render();

    }

    function render() {
        ctx.clearRect(0, 0, 600, 600);
        drawRect(snakeHead);

    }
    function checkForBorder(snakePart) {
        console.log('checkForBorder=====', actionInterval)
     //   clearTimeout(actionTimeOut);
        if (snakePart.x > fieldSize - snakeSideLength || snakePart.x < 0 ||
            snakePart.y > fieldSize - snakeSideLength || snakePart.y < 0)
        {
            console.log(`clearTimeout called --- `, actionInterval);
            clearInterval(actionInterval);
            setTimeout(() => {
                alert("Snake faced with border");
            })
            return false;
        }
        return true;
    }


    function up(snakePart){
        snakePart.y = snakePart.y - snakeSideLength ;
        return snakePart;
    }
    function down(snakePart){
        snakePart.y = snakePart.y + snakeSideLength
        return snakePart;
    }
    function left(snakePart){
        snakePart.x = snakePart.x - snakeSideLength;
        return snakePart;
    }
    function right(snakePart){
        snakePart.x = snakePart.x + snakeSideLength;
        return snakePart;
    }

});
