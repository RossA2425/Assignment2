// JavaScript for rotating images
const images = document.querySelectorAll('.image-container img');
let index = 0;

function rotateImages() {
  images[index].classList.remove('active');
  index = (index + 1) % images.length;
  images[index].classList.add('active');
  
  if (index === 0) {
    // Reset the index when it reaches the end of the array
    images[images.length - 1].classList.remove('active');
    index = 0;
    images[index].classList.add('active');
  }
}

setInterval(rotateImages, 3000);