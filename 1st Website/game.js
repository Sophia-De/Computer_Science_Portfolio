var obstacles = [];
var score = 0;
var createObstacles = null;
var canvas;
var pause = document.getElementById("pause");
var gameState = {
    paused: false,
};

pause.addEventListener("click", function() {
    if (createObstacles != null) {
        clearInterval(createObstacles);
        createObstacles = null;
        gameState.paused = true;
    }
    else {
        createObstacles = window.setInterval(function() {
            obstacles.push(
                new PowerUp(30, Math.floor(Math.random() * width) + 1, 0))
        }, 5000);
        gameState.paused = false;
    }
});

var player = {
    x: 15,
    y: 25,
    diameter: 30,
    move: function() {
        if (mouseX > 3 && mouseX < width - 3) {
            this.x = mouseX;
        }
        if (mouseY > 5 && mouseY < height - 200) {
            this.y = mouseY;
        }

    },
    draw: function() {
        fill(67, 202, 247);
        stroke(0, 0, 0);
        ellipse(this.x, max(this.y, height - 200), this.diameter, this.diameter);
    }
}

function setup() {
    var canvas = createCanvas(400, 480);
    canvas.parent("canvasContainer")
}

function PowerUp(diameter, x, y) {
    this.diameter = diameter;
    this.x = x;
    this.y = y;
    this.matched = false;
    this.move = function() {
        this.y = this.y + 2;
    };
    this.draw = function() {
        if (this.matched) {
            fill(0, 255, 34);
        }
        else {
            noFill(0, 0, 0);
        }
        stroke(255, 255, 255);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }

}

createObstacles = window.setInterval(function() {
    obstacles.push(
        new PowerUp(30, Math.floor(Math.random() * width) + 1, 0))
}, 5000);


draw = function() {
    fill(0, 50, 200)
    rect(0, 0, width, height);
    player.move();
    player.draw();
    text("Score: " + score, 330, 20);
    for (var i = 0; i < obstacles.length; i++) {
        obstacles[i].move();
        obstacles[i].draw();
        if (!obstacles[i].matched && obstacles[i].x > player.x - 2 && obstacles[i].x < player.x + 2 && obstacles[i].y < player.y + 2 && obstacles[i].y > player.y - 2) {
            score++;
            obstacles[i].matched = true;
        }
    }
    if (gameState.paused) {
        text("PAUSED", 170, 200);
    }
}