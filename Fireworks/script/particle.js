function Particle(x, y, hu, firework) {
    this.pos = createVector(x, y);
    this.lifespan = 255;
    this.alpha = 1;

    if (firework) {
        this.vel = createVector(0, random(-13, -17));
    }
    else {
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(4, 12));
    }
    this.acc = createVector(0, 0);

    this.applyForce = function (force) {
        this.acc.add(force);
    }

    this.update = function () {
        if (!firework) {
            this.vel.mult(0.94);
            this.lifespan -= 5;
            this.alpha -= 0.02;
        }
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    this.done = function () {
        if (this.lifespan < 0) {
            return true;
        }
        else {
            return false;
        }
    }

    this.show = function () {
        colorMode(HSB);
        if (!firework) {
            stroke(hu, 255, 255, this.alpha);
            strokeWeight(3);
        }
        else {
            stroke(hu, 255, 255);
            strokeWeight(4);
        }
        point(this.pos.x, this.pos.y);
    }
}