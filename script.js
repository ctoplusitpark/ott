// script.js
document.getElementById('registrationForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('https://api.indrajala.in/api/user/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        });

        if (response.status === 201) {
            const data = await response.json();
            document.getElementById('message').innerText = "Registration successful!";
            console.log('Token:', data.token);
        } else {
            document.getElementById('message').innerText = "Registration failed!";
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('message').innerText = "An error occurred. Please try again.";
    }
});

