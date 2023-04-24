// JavaScript for rotating images
const images = document.querySelectorAll('.image-container img');
let index = 0;

function rotateImages() {
  images[index].classList.remove('active');
  index = (index + 1) % images.length;
  images[index].classList.add('active');
}

setInterval(rotateImages, 3000);
