const smallcups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');


smallcups.forEach((cup,idx)=>{
    cup.addEventListener('click',()=> fillCups(idx))
})

const fillCups = (idx) =>{
    //toggle the full class using condition based on the idx of element with class of full and the next one without class of full
    if(smallcups[idx].classList.contains('full') && !smallcups[idx].nextElementSibling.classList.contains('full')){
        idx--
    }
    //add the class of full to each element smaller than idx
    smallcups.forEach((cup,index)=>{
        if(index <= idx){
            cup.classList.add('full');
        }else{
            cup.classList.remove('full');
        }
    })
}