$(document).ready(function () {
    let canvas;
    let ctx;
    let snakeSideLength;
    let snake = [{x: 0, y: 0}];
    let food = {x: 0, y: 0};
    let fieldSize;
    let directionFn;
    let actionInterval;
    let visibleZone;
    let maxMultipleNum;
    const direction = [left, right, up, down]

    function getRandomInt(max, num = 0) {
        return Math.floor(Math.random() * max) + num;
    }

    console.log(`Window Ready`);

    $(window).on('load', function () {
        console.log(`onload called`);
        init();
    });

    function init() {
        canvas = $("#myCanvas");
        ctx = canvas[0].getContext('2d');
        fieldSize = canvas.width();
        snakeSideLength = fieldSize / 20; // размер сегмента
        visibleZone = fieldSize - snakeSideLength;
        maxMultipleNum = visibleZone / snakeSideLength;
        snake[0].x = snakeSideLength * getRandomInt(maxMultipleNum); // coordinates
        snake[0].y = snakeSideLength * getRandomInt(maxMultipleNum); // coordinates
        food.x = snakeSideLength * getRandomInt(maxMultipleNum);
        food.y = snakeSideLength * getRandomInt(maxMultipleNum);
        directionFn = direction[getRandomInt(4)];
        drawRect(snake); // render cube
        window.addEventListener("keydown", update, false); // почитать
        const triggerSnake = document.querySelector("#stopSnake") // почитать
        // triggerSnake.addEventListener("click", run, false);
        run();
    }

    function moveSnakePart() {
        directionFn(snake);
        if (checkForBorder(snake)) {
            render();
        }
    }

    function moveCordinates(array) {
        for (let i = array.length - 1; i >= 1; i--) {
            array[i].x = array[i - 1].x
            array[i].y = array[i - 1].y
        }
        return array;
    }

    function eatFood(snakeHead, food) {
        if (snakeHead[0].x === food.x && snakeHead[0].y === food.y) {
            snakeHead.push({x: food.x, y: food.y});
            number = 0;
            console.log('Eaten');
            console.log(snakeHead);
            console.log(food);
            food.x = snakeSideLength * getRandomInt(maxMultipleNum);
            food.y = snakeSideLength * getRandomInt(maxMultipleNum);
        }
    }

    let number = 0;

    function run() {
        actionInterval = setInterval(function () {
            moveSnakePart();
            snake = moveCordinates(snake);
            number = number === 5 ? 5 : number + 1;
            console.log('iter', number)
            if (number >= 5) {
                drawRect(food);
                eatFood(snake, food);
            }

        }, 200);
        console.log('created timeout === ', actionInterval);
    }

    /**
     *
     * @param [{x: number, y: number}]snakePart
     * @param {string}color
     */
    function drawRect(snakePart) {
        if (!Array.isArray(snakePart)) {
            snakePart = [snakePart]
        }
        snakePart.forEach(part => {
            ctx.fillStyle = '#666'
            console.log('drawRect was called with x - %d, y - %d', part.x, part.y);
            ctx.fillRect(part.x, part.y, snakeSideLength, snakeSideLength);
        })

    }

    /**
     *
     * @param {{x: number, y: number}}obj
     * @param {number}count
     */



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
        ctx.clearRect(0, 0, fieldSize, fieldSize);
        drawRect(snake);
        // drawRect(food);
    }

    function checkForBorder(snakePart) {
        //   clearTimeout(actionTimeOut);
        if (snakePart[0].x > fieldSize - snakeSideLength || snakePart[0].x < 0 ||
            snakePart[0].y > fieldSize - snakeSideLength || snakePart[0].y < 0) {
            console.log(`clearTimeout called --- `, actionInterval);
            clearInterval(actionInterval); // почитать
            setTimeout(() => {
                alert("Snake faced with border"); // костыль
            })
            return false;
        }
        return true;
    }


    function up(snakePart) {
        snakePart[0].y = snakePart[0].y - snakeSideLength;
        return snakePart;
    }

    function down(snakePart) {
        snakePart[0].y = snakePart[0].y + snakeSideLength
        return snakePart;
    }

    function left(snakePart) {
        snakePart[0].x = snakePart[0].x - snakeSideLength;
        return snakePart;
    }

    function right(snakePart) {
        snakePart[0].x = snakePart[0].x + snakeSideLength;
        return snakePart;
    }

});
