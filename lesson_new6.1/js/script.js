"use strict"
const icon = document.querySelector('.name-button');
icon.addEventListener('click', function(){
    document.documentElement.classList.toggle('menu-open')
 })
 const icon1 = document.querySelector('.button-menu');
icon1.addEventListener('click', function(){
    document.documentElement.classList.toggle('menu-open')
 })
 const allInform = document.querySelector('.all-information');
allInform.addEventListener('click', function(){
    document.documentElement.classList.toggle('all-information-open')
 })
 const allReturn = document.querySelector('.button-return');
 allReturn.addEventListener('click', function(){
     document.documentElement.classList.toggle('all-information-open'),
    document.documentElement.classList.toggle('menu-open')

  })
  
document.addEventListener('DOMContentLoaded', () => {
  const timeSpans = document.querySelectorAll('.time-new');
  const dateSpans = document.querySelectorAll('.date-new');
  const updateButton = document.querySelector('.time-update');

  function formatDateTime(dateObj) {
    const hours = dateObj.getHours().toString().padStart(2, '0');
    const minutes = dateObj.getMinutes().toString().padStart(2, '0');
    const day = dateObj.getDate().toString().padStart(2, '0');
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObj.getFullYear();

    return {
      time: `${hours}:${minutes}`,
      date: `${day}.${month}.${year}`
    };
  }

  function updateDateTime() {
    const now = new Date();
    const { time, date } = formatDateTime(now);

    timeSpans.forEach(span => span.textContent = time);
    dateSpans.forEach(span => span.textContent = date);

    localStorage.setItem('lastTime', time);
    localStorage.setItem('lastDate', date);
  }

  function loadSavedDateTime() {
    const savedTime = localStorage.getItem('lastTime');
    const savedDate = localStorage.getItem('lastDate');

    if (savedTime && savedDate) {
      timeSpans.forEach(span => span.textContent = savedTime);
      dateSpans.forEach(span => span.textContent = savedDate);
    }
  }

  loadSavedDateTime();
  updateButton.addEventListener('click', updateDateTime);
});

