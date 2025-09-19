document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (name === '' || email === '' || message === '') {
        document.getElementById('responseMessage').textContent = "Please fill out all fields.";
        document.getElementById('responseMessage').style.color = "red";
        return;
    }

    // Simulate sending message
    document.getElementById('responseMessage').textContent = `Thank you, ${name}! Your message has been sent.`;
    document.getElementById('responseMessage').style.color = "green";

    // Clear form
    document.getElementById('contactForm').reset();
});

