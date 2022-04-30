const nav = document.querySelector("nav .container");

window.addEventListener("scroll",()=>{
    if(window.scrollY>nav.offsetHeight*10){
        console.log(nav.offsetHeight);
        nav.classList.add('scroll');
    }
    else{
        nav.classList.remove('scroll');
    }
})