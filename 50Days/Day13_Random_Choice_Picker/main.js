const choicesEl = document.querySelector('#choices');
const textArea = document.getElementById('textarea');

textArea.focus();

textArea.addEventListener('keyup', (e) => {
    createTags(e.target.value);

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


