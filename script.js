const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 100; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2,
    speed: Math.random() * 1
  });
}

function draw() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "#0d0d1f"; 
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "#00f0ff"; 
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
    ctx.fill();
  });

  move();
}

function move() {
  stars.forEach(star => {
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });
}

function animate() {
  draw();
  requestAnimationFrame(animate);
}

animate();







  