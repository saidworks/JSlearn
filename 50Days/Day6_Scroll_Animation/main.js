const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', boxesAppear);

function boxesAppear(){
    const triggerbottom = window.innerHeight*0.5;
    boxes.forEach(box=>{
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop<triggerbottom){
          box.classList.add('show')  
        }
        else{
            box.classList.remove('show')
        }
    })

}