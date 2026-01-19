
const startDate = new Date("2025-11-19T11:30:00");


function updateProgress(value, counter, type) {
    const circle = document.querySelector(type);

    const radius = 34;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;

    const percent = value / counter;
    const offset = circumference * (1 - percent);

    circle.style.strokeDashoffset = offset;
}

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;
  
    let seconds = Math.floor(diff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
  
    let years = Math.floor(days / 365);
    days %= 365;
  
    let months = Math.floor(days / 30.44);
    days = Math.floor(days % 30.44);
  
    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    document.getElementById("years").textContent = years;
    updateProgress(years, 50,'.years');
    document.getElementById("months").textContent = months;
    updateProgress(months, 11,'.months');
    document.getElementById("days").textContent = days;
    updateProgress(days, 29,'.days');
    document.getElementById("hours").textContent = hours;
    updateProgress(hours, 23 ,'.hours');
    document.getElementById("minutes").textContent = minutes;
    updateProgress(minutes, 59,'.minutes');
    document.getElementById("seconds").textContent = seconds;
    updateProgress(seconds, 60, '.seconds');
}

// Atualizar a cada segundo
setInterval(updateCounter, 1000);

// Inicializar
updateCounter();
