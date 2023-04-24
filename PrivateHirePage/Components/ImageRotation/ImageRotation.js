// Define an array of image file names
const images = [  './Images/cinema1.jpg',  './Images/cinema2.jpg',  './Images/cinema3.jpg'];

// Initialize a variable to keep track of the current image index
let currentImageIndex = 0;

// Select the img elements inside the container using the class name
const imageElements = document.querySelectorAll('.image-container img');

// Define a function to update the displayed image
function displayImage() {
  // Set the src attribute of the current image element to the current image file
  imageElements[currentImageIndex].setAttribute('src', images[currentImageIndex]);

  // Increment the current image index, or reset it to zero if it exceeds the length of the image array
  currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Call the displayImage function every 2 seconds
setInterval(displayImage, 2000);
