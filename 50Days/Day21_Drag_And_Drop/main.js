const boxes = document.querySelectorAll('.empty');
const fill = document.querySelector('.fill');

fill.addEventListener('dragstart',dragStart)
fill.addEventListener('dragend',dragEnd)

for(const box of boxes){
    box.addEventListener('dragover',dragOver)
    box.addEventListener('dragenter',dragEnter)
    box.addEventListener('dragleave',dragLeave)
    box.addEventListener('drop',dragDrop)
}



function dragStart(){
    this.classList.add('hold');
    setTimeout(()=>   this.remove(),0);
  
}

function dragEnd(){
   this.className = 'fill';
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
    this.classList.add("hovered");
}

function dragLeave(){
    this.className = "empty";
}

function dragDrop(){
    this.className = 'empty';
    this.append(fill);
}