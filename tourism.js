document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const messageDiv = document.getElementById('form-message');
    messageDiv.innerText = 'Thank you for contacting us!';
    document.getElementById('contact-form').reset();
});
