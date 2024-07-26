function submitForm() {
    alert('Your slot has been booked');
    document.getElementById("contactForm").reset();
    return false; // Prevent default form submission behavior
}

 // Select the appointments link and the ALPHA SPACES element
const appointmentsLink = document.getElementById('appointments-link');
const alphaSpaces = document.getElementById('alpha-spaces');

// Add event listeners for mouse enter and leave
appointmentsLink.addEventListener('mouseenter', function() {
    // Add the class to change the color of ALPHA SPACES
    alphaSpaces.classList.add('change-color');
});

appointmentsLink.addEventListener('mouseleave', function() {
    // Remove the class when mouse leaves
    alphaSpaces.classList.remove('change-color');
});