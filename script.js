const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

function setClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDeg = (seconds / 60) * 360;
    const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hourDeg = (hours / 12) * 360 + (minutes / 60) * 30;

    second.style.transform = `rotate(${secondDeg}deg)`;
    minute.style.transform = `rotate(${minuteDeg}deg)`;
    hour.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setClock, 1000);
setClock();
