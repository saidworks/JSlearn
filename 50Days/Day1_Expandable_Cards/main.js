const panels = document.querySelectorAll('.panel');


function Expand(){
    this.classList.toggle("active");
}

panels.forEach( (panel)=> {
    panel.addEventListener('click',Expand)
})

