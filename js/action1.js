$(document).ready(function () {
    let canvas;
    let ctx;
    function init() {
        canvas = $("#myCanvas");
        ctx = canvas[0].getContext('2d');
       const gameField = new GameField(600);
       const snake = new Snake(gameField);
       const food = new Food(gameField);
       gameField.registerFood(food);
       gameField.registerSnake(snake);
       gameField.start(ctx);
    }
    $(window).on('load', function () {
        console.log(`onload called`);
        init();
    });

});
