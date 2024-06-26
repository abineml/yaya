function myFunction() {
    document.getElementById("demo").innerHTML="level 10 gyaat.";

}
// Get canvas and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Bird variables
let birdX = 50;
let birdY = canvas.height / 2;
let birdVelocity = 0;
const gravity = 0.5;
const jumpStrength = -10;

// Pipe variables
let pipes = [];
const pipeWidth = 50;
const pipeGap = 150;
const pipeSpeed = 2;
const pipeFrequency = 150; // Distance between consecutive pipes

let score = 0;

// Game loop
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

function update() {
    // Update bird position
    birdVelocity += gravity;
    birdY += birdVelocity;

    // Generate new pipes
    if (frames % pipeFrequency === 0) {
        createPipe();
    }

    // Move pipes to the left
    pipes.forEach(pipe => {
        pipe.x -= pipeSpeed;

        // Check for collision with bird
        if (birdX + 20 > pipe.x && birdX < pipe.x + pipeWidth && (birdY < pipe.y || birdY + 20 > pipe.y + pipeGap)) {
            gameOver();
        }

        // Update score
        if (birdX > pipe.x + pipeWidth && !pipe.passed) {
            score++;
            pipe.passed = true;
        }

        // Remove pipes that have moved offscreen
        if (pipe.x + pipeWidth < 0) {
            pipes.shift();
        }
    });
}

function draw() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw bird
    ctx.fillStyle = '#FF5733';
    ctx.fillRect(birdX, birdY, 20, 20);

    // Draw pipes
    ctx.fillStyle = '#2ECC71';
    pipes.forEach(pipe => {
        ctx.fillRect(pipe.x, 0, pipeWidth, pipe.y);
        ctx.fillRect(pipe.x, pipe.y + pipeGap, pipeWidth, canvas.height - (pipe.y + pipeGap));
    });

    // Draw score
    ctx.fillStyle = '#000';
    ctx.font = '24px Arial';
    ctx.fillText(`Score: ${score}`, 10, 30);
}

// Event listener for spacebar to flap bird
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        birdVelocity = jumpStrength;
    }
});

// Game initialization
gameLoop();

// Helper functions
function createPipe() {
    const pipeY = Math.floor(Math.random() * (canvas.height - pipeGap));
    pipes.push({ x: canvas.width, y: pipeY, passed: false });
}

function gameOver() {
    alert(`Game Over! Your score: ${score}`);
    // Reset game variables for a new game
    birdX = 50;
    birdY = canvas.height / 2;
    birdVelocity = 0;
    pipes = [];
    score = 0;
}




