let star = document.querySelectorAll('.fa-star');
let rating = document.querySelector('.rating');
let img = document.getElementById('img');
// let head = document.getElementById("head");
// let img = document.createAttribute("img");
// img.insertAdjacentElement('afterend','head')


let imges = [
  "https://virtualvidhya.github.io/MiniProjects-JS/CustomerFeedback/images/very_poor.png",
  "https://virtualvidhya.github.io/MiniProjects-JS/CustomerFeedback/images/poor.png",
  "https://virtualvidhya.github.io/MiniProjects-JS/CustomerFeedback/images/average.png",
  "https://virtualvidhya.github.io/MiniProjects-JS/CustomerFeedback/images/good.png",
  "https://virtualvidhya.github.io/MiniProjects-JS/CustomerFeedback/images/excellent.png",
];

let msg = ["very poor","poor","average","good","excellent"];

for (let i = 0; i < star.length; i++) {
  star[i].addEventListener('click', function () {
    for (let j = 0; j < star.length; j++) {
      if (j <= i) {
        star[j].classList.add('color');
      } else {
        star[j].classList.remove('color');
      }
    }
    img.setAttribute('src',imges[i]);
    rating.innerHTML = msg[i];
  });
}    
