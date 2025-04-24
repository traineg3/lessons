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


