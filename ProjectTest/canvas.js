var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillStyle = 'rgba(255,0,0,0.3)';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(0,0,255,0.3)';
c.fillRect(200, 300, 100, 100);
c.fillStyle = 'rgba(255,0,255,0.8)';
c.fillRect(500, 200, 100, 100);

console.log(canvas);

// Line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300,100);
c.lineTo(300,400);
c.lineTo(100,300);
c.strokeStyle = "#fa34a3";
c.stroke();

// Arc & Circle
c.beginPath();
c.arc(200, 200, 30, 0, Math.PI * 2, false);
c.stroke();

c.arc(250, 200, 30, 0, Math.PI*0.5, false);
c.stroke();


for(var i = 0; i <= 3; i++)
{
  x = Math.random() * window.innerWidth;
  y = Math.random() * window.innerHeight;

  c.beginPath();
  c.arc(x, y, 50, 0, Math.PI * 2, false);
  c.strokeStyle = 'blue';
  c.stroke();
}
