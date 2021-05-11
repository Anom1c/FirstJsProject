class IceCube {
    constructor(color, size, x= 0, y = 0) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }
    draw(ctx){
        ctx.fillStyle = this.color;
        console.log('drawRect was called with x - %d, y - %d, size - %d', this.x, this.y, this.size);
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}
