function submitFeedback(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Retrieve values dynamically when submitting
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    // Update the DOM elements with user info
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    // Display the user information section
    document.getElementById('userInfo').style.display = 'block';

    // Show a thank you alert
    alert('Thank you for your valuable feedback');
}

// Attach event listener to the button
const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;

// Allow submission by pressing the Enter key
document.addEventListener('keydown', function(event) {
   if (event.key === 'Enter') {
     submitFeedback(event); // Pass the event to prevent default behavior
   }
});
