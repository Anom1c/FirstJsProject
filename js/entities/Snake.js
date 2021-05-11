class Snake {
    constructor(fieldInstance) {
        this.body = [];
        this.color = '#aa138b';
        this.size = fieldInstance.cellSize;
        this.addSegment();
    }
    getSegmentCoordinates() {
        // todo add check => if no body length, than default coordinates, else took from previous
        return {x: 0, y: 0};
    }
    addSegment(){
        const {x, y} = this.getSegmentCoordinates();
        this.body.push(new IceCube(this.color, this.size, x, y));
    }
    draw(ctx){
        this.body.forEach(segment => segment.draw(ctx))
    }

}
