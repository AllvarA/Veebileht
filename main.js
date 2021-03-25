"use strict";
const web = "https://AllvarA.github.io";
const language = document.querySelector(".lang");
let projects = document.querySelectorAll(".project-main");

// Project links
const webpages = [
  `${web}/quess/`,
  `${web}/dicegame/`,
  `${web}/bankapp/`,
  `${web}/bankweb/`,
  `${web}/mapty/`,
];
// Project titles in EN and EE
let projectNames = new Array();
projectNames[0] = [
  "Quess the number project",
  "Dice game",
  "Bankist app",
  "Bankist webpage",
  "Mapty app",
];
projectNames[1] = [
  "Arva ära",
  "Täringumäng",
  "Panga äpp",
  "Panga veebileht",
  "Kaardi äpp",
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
  if (language.textContent === "EST") {
    let selector = (document.querySelector(`.project${[i + 1]}`).textContent =
      projectNames[0][i]);
  } else {
    let selector = (document.querySelector(`.project${[i + 1]}`).textContent =
      projectNames[1][i]);
  }
  // Selecting images and choosing website for every image
  let img = document.querySelector(`.img${i + 1}`);
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
