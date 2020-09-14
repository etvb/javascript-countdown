const $days =document.getElementById('days'); 
const $hours =document.getElementById('hours');
const $mins =document.getElementById('mins');
const $seconds =document.getElementById('seconds');
const birthday = '29 AUG 2021';

function countdown() {
  const birthdayMls = new Date(birthday);
  const currentDate = new Date();
  const totalSeconds = (birthdayMls - currentDate) / 1000
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  $days.innerHTML = days;
  $hours.innerHTML = hours;
  $mins.innerHTML = formatTime(mins);
  $seconds.innerHTML = formatTime(seconds);


  console.log(days);
}

function formatTime(time) {
  return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown,1000);