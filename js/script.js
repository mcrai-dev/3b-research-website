let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
   loginForm.classList.add('active');
}

document.querySelector('#close-login-form').onclick = () =>{
   loginForm.classList.remove('active');
}

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   loginForm.classList.remove('active');
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');

   if(window.scrollY > 0){
      document.querySelector('.header').classList.add('active');
   }else{
      document.querySelector('.header').classList.remove('active');
   }
}

// Array of background images
/*
const backgroundImages = [
   '../images/carousels-bg/index_bg.jpg',
   '../images/carousels-bg/index_bg_1.jpg',
   '../images/carousels-bg/index_bg_2.png',
   '../images/carousels-bg/index_bg_3.png'
];

let currentImageIndex = 0;

function changeBackgroundImage() {
   const homeElement = document.querySelector('.home');
   currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
   const imageUrl = backgroundImages[currentImageIndex];
   
   homeElement.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${imageUrl})`;
}

// Change image every 5 seconds
setInterval(changeBackgroundImage, 5000);

// Initial call to set the first image
changeBackgroundImage();
*/
document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');
    
    boxes.forEach(box => {
       const animatedIcon = box.querySelector('.icon.animated');
       
       box.addEventListener('mouseenter', () => {
          // Réinitialiser le GIF pour qu'il redémarre à chaque hover
          animatedIcon.src = animatedIcon.src;
       });
    });
 });


 /**************choix de langue */
 function changeLanguage(lang) {
   const selected = document.querySelector(`option[value="${lang}"]`);
   const flagUrl = selected.getAttribute('data-icon');
   const flagImg = document.getElementById('selected-flag');
   flagImg.src = flagUrl;
   flagImg.alt = `Flag for ${selected.textContent}`;
   // Ajoutez ici votre logique de changement de langue
}

// Initialiser le drapeau au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
   const defaultLang = document.getElementById('language-switcher').value;
   changeLanguage(defaultLang);
});