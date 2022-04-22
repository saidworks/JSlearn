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


function setSlide(){
    slides.forEach(slide=>{
        slide.classList.remove('active')
    })

    slides[activeSlide].classList.add('active');
}

rightBtn.addEventListener('click',()=>{
    let imgs = images;
    if(activeSlide<images.length){
    activeSlide++;
    }
    else{
        activeSlide = 0;
    }
    setSlide();
    setBgToBody(imgs);
})


leftBtn.addEventListener('click',()=>{
    let imgs = images;
    if(activeSlide>=0){
    activeSlide--;
    }
    else{
        activeSlide = 0;
    }
    setSlide();
    setBgToBody(imgs);
})