const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = "0";

    const updateCounter = () =>{
        const target = +counter.getAttribute("data-target");
        const c = +counter.innerText;
        const increment = Math.round(target/100);
        if(c<target){
            counter.innerText = `${c + increment}`;
            setTimeout(updateCounter,10);
        }
    }

    updateCounter();
})