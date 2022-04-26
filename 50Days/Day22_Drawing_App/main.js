const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let radius = 20;
let color = "black";
let x;
let y;



function drawCircle(x,y){
    ctx.beginPath();
    //draw a circle  https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}
function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.stroke();
}

