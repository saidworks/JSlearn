const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
var images = [];
let activeSlide = 0;

slides.forEach(slide=>{
     let style = window.getComputedStyle(slide,false);
     let img = style.backgroundImage.slice(4, -1).replace(/"/g, "");
     images.push(img);
   
})

function setBgToBody(imgs){

    body.style.backgroundImage = `url("${imgs[activeSlide]}")`;
    
}
setBgToBody(images);