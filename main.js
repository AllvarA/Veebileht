"use strict";
const web = "https://AllvarA.github.io";
const shortImg = "url(https://allvara.github.io/web/images/";
const language = document.querySelector(".lang");
let projects = document.querySelectorAll(".project-main");

// Project images
const projectImages = [
  `${shortImg}arva.jpg)`,
  `${shortImg}kesennem.jpg)`,
  `${shortImg}bankacc.jpg)`,
  `${shortImg}bankweb.jpg)`,
  `${shortImg}mapty.jpg)`,
  `${shortImg}forky.jpg)`,
];
// Project links
const webpages = [
  `${web}/quess/`,
  `${web}/dicegame/`,
  `${web}/bankapp/`,
  `${web}/bankweb/`,
  `${web}/mapty/`,
  "https://forkify-final.netlify.app/",
];
// Project titles in EN and EE
let projectNames = new Array();
projectNames[0] = [
  "Quess the number project",
  "Dice game",
  "Bankist app",
  "Bankist webpage",
  "Mapty app",
  "Forkify app",
];
projectNames[1] = [
  "Arva ära",
  "Täringumäng",
  "Panga äpp",
  "Panga veebileht",
  "Kaardi äpp",
  "Retsepti äpp",
];

// Function for pressing on image to go to other webpage
function press(e) {
  if (e.path[0].classlist === img[1]) {
    window.location.href = webpages[i];
  }
}

// Loops over class project-main and choosing titles for EN and EE
for (let i = 0; i < projects.length; i++) {
  let project = projects[i];
  let selector = document.querySelector(`.project${[i + 1]}`);
  if (language.textContent === "EST") {
    selector.textContent = projectNames[0][i];
  } else {
    selector.textContent = projectNames[1][i];
  }
  // Selecting images and choosing website for every image
  let img = document.querySelector(`.img${i + 1}`);
  img.style.backgroundImage = `${projectImages[i]}`;
  img.addEventListener("click", function (e) {
    if (e.path[0].classlist === img[1]) {
      window.location.href = webpages[i];
    }
  });
}
// Smooth scrolling for navigation links
document.querySelector(".nav-links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    const target = e.target.getAttribute("href");
    document.querySelector(target).scrollIntoView({ behavior: "smooth" });
  }
});
