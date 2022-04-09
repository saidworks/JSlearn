const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', boxesAppear);

function boxesAppear(){
    const triggerbottom = window.innerHeight*0.9;
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