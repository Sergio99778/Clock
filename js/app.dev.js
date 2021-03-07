const clock = document.querySelector(".clock");
const getHour = () => {
    const date = new Date();
    const time = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        seconds: date.getSeconds()
    }
    clock.innerHTML = `${time.hour} : ${time.minute} : ${time.seconds}`;
};
setInterval(getHour,100)