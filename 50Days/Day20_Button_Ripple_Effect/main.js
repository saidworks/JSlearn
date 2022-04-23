const buttons = document.querySelectorAll('.ripple');


buttons.forEach(button=> {
    button.addEventListener('click',function(e){
        //click position in the window
        const x = e.clientX;
        const y = e.clientY;
        //position of the top and left of the button 
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        const xInsideButton = x - buttonLeft;
        const yInsideButton = y - buttonTop; 

        const circle = document.createElement('span');
        circle.classList.add("circle");
        //circle.style.transformOrigin = `${xInsideButton}px ${yInsideButton}px`;
        circle.style.top = yInsideButton + 'px';
        circle.style.left = xInsideButton + 'px';
        
        this.appendChild(circle);

        setTimeout(()=>circle.remove(),500);

    })
})