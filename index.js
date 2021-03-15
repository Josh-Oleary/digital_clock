let select = document.getElementById('clockSwitch');
let clockType = select.value;
select.addEventListener('click', switchClock())
console.log(clockType)

function switchClock(){
    select.value = select.value;
}

function updateClock() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    clock.innerText = hour + ":" + minute + ":" + second;
}

setInterval(updateClock, 1000);