export default class Enemy {
    
    constructor(x, y, imageNumber) {
        this.x = x;
        this.y = y;

        this.image = new Image();
        this.image.src = `imgages/enemy${imageNumber}.png`
    }
}