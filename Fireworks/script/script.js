var totalHeight = window.innerHeight;
var totalWidth = window.innerWidth;

var gravity;
var fireworks = [];

function setup() {
    createCanvas(totalWidth, totalHeight + 3);
    colorMode(HSB);
    gravity = createVector(0, 0.2)
    stroke(255);
    strokeWeight(4);
    background(0)
}

function draw() {
    colorMode(RGB)
    background(0, 20);
    if (random(1) < 0.1) {
        fireworks.push(new Firework());
    }

    for (let i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].show();
        if (fireworks[i].done()) {
            fireworks.splice(i, 1);
        }
    }
}