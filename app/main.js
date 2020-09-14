const $days =document.getElementById('days'); 
const $hours =document.getElementById('hours');
const $mins =document.getElementById('mins');
const $seconds =document.getElementById('seconds');
const birthday = '29 aug 2021';

function countdown() {
  const birthdayMls = new Date(birthday);
  const currentDate = new Date();
  const totalSeconds = (birthdayMls - currentDate) / 1000
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = ('0' + Math.floor(totalSeconds / 60) % 60).slice(-2);
  const seconds = ('0' + Math.floor(totalSeconds % 60)).slice(-2);

  $days.innerHTML = days;
  $hours.innerHTML = hours;
  $mins.innerHTML = mins;
  $seconds.innerHTML = seconds;
}


setInterval(countdown,1000);