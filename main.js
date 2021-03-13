'use strict';
const nav = document.querySelector('.nav');
// Väga palju korduseid
// Project names
const project1 = document.querySelector('.project1');
const project2 = document.querySelector('.project2');
const project3 = document.querySelector('.project3');
const project4 = document.querySelector('.project4');
const project5 = document.querySelector('.project5');

// Project images

const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');
const img5 = document.querySelector('.img5');

// Project links

const quessWeb = 'https://AllvarA.github.io/quess/';
const diceWeb = 'https://AllvarA.github.io/dicegame/';
const bankAppWeb = 'https://AllvarA.github.io/bankapp/';
const bankistWeb = 'https://AllvarA.github.io/bankweb/';
const maptyWeb = 'https://AllvarA.github.io/mapty/';

// Click function

function vajutus(e) {
  if (e.path[0].className === 'project-img img1') {
    window.location.href = quessWeb;
  } else if (e.path[0].className === 'project-img img2') {
    window.location.href = diceWeb;
  } else if (e.path[0].className === 'project-img img3') {
    window.location.href = bankAppWeb;
  } else if (e.path[0].className === 'project-img img4') {
    window.location.href = bankistWeb;
  } else if (e.path[0].className === 'project-img img5') {
    window.location.href = maptyWeb;
  }
}

// Project title changes

project1.textContent = 'Quess the number project';
project2.textContent = 'Dice game';
project3.textContent = 'Bankist app';
project4.textContent = 'Bankist webpage';
project5.textContent = 'Mapty app';

// AddEventListener

img1.addEventListener('click', vajutus);
img2.addEventListener('click', vajutus);
img3.addEventListener('click', vajutus);
img4.addEventListener('click', vajutus);
img5.addEventListener('click', vajutus);

document.querySelector('.nav-links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav-link')) {
    const target = e.target.getAttribute('href');
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
  }
});
