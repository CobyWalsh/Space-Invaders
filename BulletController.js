export default class bulletController {
    bullets = [];
    timeTillNextBulletAllowed = 0;

    constructor(canvas, maxBulletsAtATime, bulletColor, soundEnabled) {
        this.canvas = canvas;
        this.maxBulletsAtATime = maxBulletsAtATime;
        this.bulletColor = bulletColor;
        this.soundEnabled = soundEnabled;

        this.shootSound = new Audio("audio/shoot.wav");
        this.shootSound.volume = 0.5;
    }

    shoot(x, y, velocity, timeTillNextBulletAllowed = 0) {
        if(
            this.timeTillNextBulletAllowed <=0 && 
            this.bullets.length < this.maxBulletsAtATime
            ) {
                const bullet = new Bullet(this.canvas, x, y, velocity, this.bulletColor);
            }
          }
        }