const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggle = document.querySelector(".toggle")
const html = document.documentElement;
/* 360deg => 12hours => 30deg/hour
    minutes


*/

function calculateTime(){
    //clock
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let hDeg=mDeg=sDeg=0;
    hDeg = (h-12)*30;
    mDeg = m*360/60;
    sDeg = s*360/60;
    hourEl.style.transform = `translate(-50%, -100%) rotate(${hDeg}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${mDeg}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${sDeg}deg)`;
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    //watch time
    if(m>=10){
        timeEl.innerText = `${h}:${m}`;
    }
    else{
        timeEl.innerText = `${h}:0${m}`;
    }
    //day month
    dateEl.innerHTML =`${days[d.getDay()]}, ${months[d.getMonth()]} <span class="circle">${d.getDate()}</span>  ${d.getFullYear()}`
}

setInterval(calculateTime, 1000);

toggle.addEventListener('click',()=>{
    html.classList.toggle('dark');
    
})