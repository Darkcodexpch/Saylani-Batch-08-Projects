const digitalClock = () => {
    let session = "AM";
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let mints = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let displayDate = document.querySelector('.main-date');
    let currentMonth = months[month];

    if (hours === 0) {
        hours = 12;
    }
    else if (hours > 12) {
        hours = hours - 12;
        session = "PM"

    }
    hours = (hours < 10) ? "0" + hours : hours;
    mints = (mints < 10) ? "0" + mints : mints;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    let showTime = document.querySelector('.display-time');
    showTime.innerHTML = ` <p class="hours">${hours}</p> <p class="minutes">${mints}</p> <p class="seconds">${seconds}</p> <p class="seconds">${session}</p>`
    displayDate.innerHTML = `<p class="display-date">${day}  ${currentMonth}  ${year}</p > `

}

setInterval(digitalClock, 1000)