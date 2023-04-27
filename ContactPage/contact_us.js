const form = document.getElementById("contactUs");
const modal = document.getElementById("modal");
const closeModal = document.querySelector(".close");
const formData = document.getElementById("form-data");

// When the user clicks the submit button, display the modal
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the form data and display it in the modal
    const forename = form.elements["forename"].value;
    const email = form.elements["email"].value;
    const message = form.elements["message"].value;
    formData.innerHTML = `<B>Forename:</B> ${forename}<br>Email: ${email}<br>Message: ${message}`;

    // Display the modal
    modal.style.display = "block";
});

// When the user clicks the close button, hide the modal and reset the form
closeModal.addEventListener("click", function() {
    modal.style.display = "none";
    form.reset();
});

// When the user clicks anywhere outside of the modal, hide it and reset the form
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        form.reset();
    }
});


