class Food extends IceCube {
    constructor(fieldInstance) {
        super('#3332', fieldInstance.cellSize, 0, 0);
        this.setCoordinates();
    }

    setCoordinates() {
        // todo set random coordinates
        this.x = 60;
        this.y = 90;
    }
}
