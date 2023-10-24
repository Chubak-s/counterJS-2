let countZeroElement = document.querySelector(".time");
const finalTime = {
    year: 2024,
    month: 0,
    day: 18,
    hour: 12,
    min: 0,
    sec: 0
};
let sFinal = new Date(finalTime.year, finalTime.month, finalTime.day, finalTime.hour, finalTime.min, finalTime.sec).getTime();
function getCountdownTime(){
    const now = new Date();
    let sNow = now.getTime();
    let result = new Date(sFinal - sNow).getTime();
    let days = Math.floor(result/(24*60*60*1000));
    let hours = Math.floor((result % (24*60*60*1000))/(60*60*1000));
    let minutes = Math.floor((result % (60*60*1000))/(60*1000));
    let seconds = Math.floor((result % (60*1000))/1000);
    let day = document.getElementById("day");
    day.textContent = days.toString();
    let hour = document.getElementById("hour");
    hour.textContent = hours.toString();
    let min = document.getElementById("min");
    min.textContent = minutes.toString();
    let sec = document.getElementById("sec");
    sec.textContent = seconds.toString();

    if (result<0){
        clearInterval(countdown);
        countZeroElement.innerHTML = "<h4 class='deadline'>Поступили в продажу</h4>";
    }
}
let countdown = setInterval(getCountdownTime, 1000);
getCountdownTime();