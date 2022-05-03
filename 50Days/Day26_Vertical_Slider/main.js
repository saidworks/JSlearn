const up = document.querySelector('.up-button');
const down = document.querySelector('.down-button');
const leftSlide = document.querySelector('.left-slide');
const rightSlide = document.querySelector('.right-slide');
const sliderContainer = document.querySelector('.slider-container');
const slidesLength = rightSlide.querySelectorAll('div').length;


let activeSlideIndex = 0;

leftSlide.style.top = `-${(slidesLength - 1)*100}vh`;

up.addEventListener('click',()=>changeSlide('up'));
down.addEventListener('click',()=>changeSlide('down'));

const changeSlide = (direction) =>{
    const sliderHeight = sliderContainer.clientHeight;
    console.log(sliderHeight);
    if(direction==="up"){
        activeSlideIndex++;
        if(activeSlideIndex > slidesLength -1){
            activeSlideIndex = 0;
        }
    }

    else if(direction==="down"){
        activeSlideIndex--;
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLength - 1;
        }
    }
    console.log(activeSlideIndex);
    rightSlide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    leftSlide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;

}