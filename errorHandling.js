document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    var errorMessage = '';

    if (fname.trim() === '') {
        errorMessage += 'Please enter a valid name.<br>';
    }

    
    if (lname.trim() === '') {
        errorMessage += 'Please enter a valid name.<br>';
    }

    
    if (phone.trim() === '') {
        errorMessage += 'Please enter a valid phone number.<br>';
    }

    if (email.trim() === '') {
        errorMessage += 'Please enter a valid email address.<br>';
    } else {
        var regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!regex.test(email)) {
            errorMessage += 'Please enter a valid email address.<br>';
        }
    }

    if (message.trim() === '') {
        errorMessage += 'Please enter a message.<br>';
    }

    if (errorMessage.trim() !== '') {
        document.getElementById('error-message').innerHTML = errorMessage;
    } else {
        document.getElementById('error-message').innerHTML = '';
        alert('Your message has been sent successfully!');
    }
});