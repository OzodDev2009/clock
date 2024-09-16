const clock = {
    s: document.querySelector('.s'),
    m: document.querySelector('.m'),
    h: document.querySelector('.h'),
    hours: document.querySelector('.hours'),
    minutes: document.querySelector('.minutes'),
}

function start() {
    const date = new Date();

    let secDeg = date.getSeconds() * 6
    let minDeg = date.getMinutes() * 6
    let hourDeg = date.getHours() * 30

    clock.s.style = `transform: rotate(${secDeg}deg)`
    clock.m.style = `transform: rotate(${minDeg}deg)`
    clock.h.style = `transform: rotate(${hourDeg}deg)`

    clock.hours.innerHTML = date.getHours() > 9 ? date.getHours() : '0' + date.getHours()
    clock.minutes.innerHTML = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds()

    setTimeout(() => {
        start();
    }, 1000);
}

start();