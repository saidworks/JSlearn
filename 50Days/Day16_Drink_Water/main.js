const smallcups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');
const litersQuantity = 2.5; 
updateBigCup();
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
    updateBigCup();
}

function updateBigCup(){
  //another solution
    let percentageFill = 0;
    smallcups.forEach((cup)=>{
        if(cup.classList.contains('full')){
            percentageFill += 1/smallcups.length*100
            let remaining =100- percentageFill
            percentage.style.height = `${percentageFill}%`;
            remained.style.height = `${remaining}%`;
            percentage.innerText = `${percentageFill}%`;
            //remained.innerText = `${remaining}% remained`;
            liters.innerText = `${remaining*litersQuantity/100}L `;
            
        }
    })
    // similar to tutorial
    // const fullCups = document.querySelectorAll('.cup-small.full').length;
    // const totalCups = smallcups.length;

    // if(fullCups===0){
    //     percentage.style.visibility = 'hidden';
    //     percentage.style.height = 0;
    // }
    // else{
    //     percentage.style.visibility = 'visible';
    //     percentage.style.height = `${fullCups/totalCups*40}rem`;
    //     remained.style.height = `${(totalCups-fullCups)/totalCups*40}rem`;
    //     percentage.innerText = `${fullCups/totalCups*100}%`;
    //     remained.innerText = `${(totalCups-fullCups)/totalCups*100}% remained`;
    // }
}