function validateForm(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate email format for username
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
        alert('Invalid email format for username');
        return;
    }

    // Validate password requirements
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]+$/;
    if (!passwordRegex.test(password)) {
        alert('Invalid password. It must contain an uppercase letter, a number, and only @ as a special character.');
        return;
    }

    // Redirect to the dashboard for a specific password
    if (password === 'SmartServTest@123') {
        window.location.href = 'dashboard.html';
    } else {
        alert('Incorrect username or password');
    }
}

function forgotPassword() {
    const email = 'support@smartserv.io';
    const subject = 'Password Reset Request';
    const body = 'Dear SmartServ Support,\n\nI would like to request a password reset for my account. Please assist.\n\nSincerely,\n[Your Name]';

    // Open default email client with pre-filled details
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
