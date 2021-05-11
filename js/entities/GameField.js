class GameField{
    constructor(size) {
        this.size = size;
        this.interval;
        this.gameTick = 500;
    }
    get cellSize(){
        return this.size / 20;
    }
    registerFood(foodInstance){
        this.food = foodInstance;
    }
    registerSnake(snakeInstance){
        this.snake = snakeInstance;
    }
    render(ctx){
        this.clear(ctx);
        if (this.food){
            this.food.draw(ctx);
        }
        if (this.snake){
            this.snake.draw(ctx);
        }
    }
    start(ctx){
        this.interval = setInterval(() => {
            this.render(ctx);
        }, this.gameTick);
    }
    clear(ctx){
        ctx.clearRect(0, 0, this.size, this.size);
    }

}
