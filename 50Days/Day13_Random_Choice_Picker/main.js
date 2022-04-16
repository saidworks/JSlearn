const choicesEl = document.querySelector('#choices');
const textArea = document.getElementById('textarea');

textArea.focus();

textArea.addEventListener('keyup', (e) => {
    createTags(e.target.value);
    if(e.key ==='Enter'){
        setTimeout(() =>{
            e.target.value ="";
        },10)
    }
    randomSelect();
})

function createTags(input){
    /* we split by comma to create an area, then we use filter with condition on avoinding void word , then we use map to create a new area without whitespaces using trim*/
    const choices = input.split(',').filter(choice => choice.trim() !== "" )
    .map(choice => choice.trim());
    choicesEl.innerHTML = "";
    choices.forEach(choice =>{
        const choiceEl = document.createElement('div');
        choiceEl.setAttribute('class','choice');
        choiceEl.innerHTML = choice;
        choicesEl.appendChild(choiceEl);
    })
}

function randomSelect(){
    /*randomly select one of the choicesEl*/
    const times = 30 ;
    const interval = setInterval(()=>{
                                    const randomChoice = pickRandomTag();
                                    highlightChoice(randomChoice);
                                    setTimeout(()=>{
                                        removeHighlightChoice(randomChoice);
                                        },100)
                                    },100);
    setTimeout(()=>{
        clearInterval(interval);
      
        setTimeout(()=>{
            const randomChoice = pickRandomTag();
            removeAllHighlights();
            highlightChoice(randomChoice)
        }
        ,100)
        },times*30)

    }

function pickRandomTag(){
    const choices = document.querySelectorAll('.choice');
    return choices[Math.floor(Math.random()*choices.length)];
}


function highlightChoice(El){
    El.classList.add('highlight');
}

function removeHighlightChoice(El){
    El.classList.remove('highlight');
}

function removeAllHighlights(){
    const choices = document.querySelectorAll('.choice');
    choices.forEach(choice=>{
        removeHighlightChoice(choice);
    })

}