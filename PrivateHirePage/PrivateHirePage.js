// Get the form element
const form = document.querySelector('form');

// Get the modal element
const modal = document.querySelector('.modal');

// Get the close button element
const closeButton = document.querySelector('.close');

// Listen for form submission
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Display the form data in the modal
  const modalBody = modal.querySelector('.modal-body');
  modalBody.innerHTML = `
    <h2>Your Booking Confirmation:</h2>
    <p>Name: ${formData.get('name')}</p>
    <p>Email: ${formData.get('email')}</p>
    <p>Room: ${formData.get('room')}</p>
    <p>Date: ${formData.get('date')}</p>
    <p>Time: ${formData.get('time')}</p>
  `;

  // Show the modal
  modal.style.display = 'block';
});

// Listen for close button click
closeButton.addEventListener('click', function() {
  // Hide the modal
  modal.style.display = 'none';
});

// Listen for outside click
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    // Hide the modal
    modal.style.display = 'none';
  }
});
