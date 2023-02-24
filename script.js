
const daysleft = document.getElementById('days');
const hoursleft = document.getElementById('hours');
const minsleft = document.getElementById('mins');
const secondsleft = document.getElementById('seconds');



const enterDate = "1 Jan 2024";

function countdown(){
    const enterDateDate = new Date(enterDate);
    const currentDate = new Date();

    const totalSeconds = (enterDateDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600%24);
    const mins = Math.floor(totalSeconds/60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    
    
    daysleft.innerHTML = days;
    hoursleft.innerHTML = hours;
    minsleft.innerHTML = mins;
    secondsleft.innerHTML = seconds;
}

// initial call

countdown();

setInterval(countdown,1000)

