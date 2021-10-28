const clockHours = document.querySelector(".clock__hours");
const clockMinutes = document.querySelector(".clock__minutes");
const clockSeconds = document.querySelector(".clock__seconds");
const clockAmPm = document.querySelector(".clock__text-ampm");

const clock = () => {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  if (hours > 12) {
    clockHours.innerText = hours - 12;
    clockAmPm.innerText = "PM";
  } else {
    clockHours.innerText = hours;
    clockAmPm.innerText = "AM";
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  clockMinutes.innerText = minutes;
  clockSeconds.innerText = seconds;
};

setInterval(clock, 1000);
