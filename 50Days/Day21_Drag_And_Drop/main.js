const boxes = document.querySelectorAll('.empty');
const fill = document.querySelector('.fill');

fill.addEventListener('dragstart',dragStart)
fill.addEventListener('dragend',dragEnd)

function dragStart(){
    console.log("drag Start")
}

function dragEnd(){
    console.log("drag End")
}

function dragOver(){
    console.log("drag Over")
}

function dragEnter(){
    console.log("drag Enter")
}

function dragLeave(){
    console.log("drag Leave")
}

function dragDrop(){
    console.log("drag Drop")
}