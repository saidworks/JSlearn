const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');
const increaseEl = document.getElementById('increase');
const decreaseEl = document.getElementById("decrease"); 
const size = document.getElementById('size');


let radius = 20;
let isPressed = false;
let color = "black";
let x;
let y;

increaseEl.addEventListener('click',()=>{
    radius +=10;
    size.innerText = radius;
})

decreaseEl.addEventListener('click',()=>{
    if(radius>=10){
    radius -=10;
    size.innerText = radius;
    }
    else radius = radius;
})

// colorPicker.addEventListener("change", watchColorPicker);

// function watchColorPicker(event) {
  
//     color = event.target.value;
//     // need to do some reading about canvas
//     console.log(color)
 
// }

canvas.addEventListener('mousedown',(e)=>{
    isPressed = true;
    
    x = e.offsetX;
    y = e.offsetY;
    
})

canvas.addEventListener('mouseup',(e)=>{
    isPressed = false;
    
    x = undefined;
    y = undefined;
})

canvas.addEventListener('mousemove',(e)=>{
    if(isPressed){
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2,y2);
        drawLine(x,y,x2,y2);
        x = x2;
        y = y2;
      
    }
    
})


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
    ctx.lineWidth = 2*radius;
    ctx.stroke();
}

