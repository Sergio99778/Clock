const clock = document.querySelector(".clock");
const getHour = () => {
    const date = new Date();
    const time = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        seconds: date.getSeconds()
    }
    if(time.hour<10){
        time.hour = "0" +time.hour;
    }
    if(time.minute<10){
        time.minute = "0" +time.minute;
    }
    if(time.seconds<10){
        time.seconds = "0" +time.seconds;
    }
    clock.innerHTML = `${time.hour} : ${time.minute} : ${time.seconds}`;
};

setInterval(getHour,100)