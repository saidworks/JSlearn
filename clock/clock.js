//variables definition 
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand')


//function definition
function setDate() {
    const now = new Date();
    hours = now.getHours();
    minutes = now.getMinutes();
    seconds = now.getSeconds();
    secondsDegrees = (seconds / 60) * 360;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minutesDegrees = ((minutes + seconds / 60) / 60) * 360;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourDegrees = ((hours + minutes / 60) / 12) * 360;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;





}



function digitalClock() {
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let state;
    // add pm,am 
    if (hour === 24) {
        hour === 12;
        stat = "AM";
    } else if (hour < 24 && hour >= 12) {
        hour -= 12;
        state = "PM";
    } else {
        hour = hour;

        state = "AM";
    }

    //if hour ,second,minute are less than 10 we will need to add zero to the left
    hour = (hour < 10) ? "0" + hour : hour;
    second = (second < 10) ? "0" + second : second;
    minute = (minute < 10) ? "0" + minute : minute;
    let time = hour + ':' + minute + ':' + second + state;
    const div = document.getElementById("time");
    div.innerText = time;
    div.textContent = time;
    div.style = "font-weight:bold; font-size: 14px; font-family:Georgia;"
    setTimeout(digitalClock, 1000);
}




setDate();
digitalClock()
setInterval(setDate, 1000);