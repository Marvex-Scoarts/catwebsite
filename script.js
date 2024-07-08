// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch random cat fact from API
    function fetchCatFact() {
        fetch('https://catfact.ninja/fact')
            .then(response => response.json())
            .then(data => {
                // Display the cat fact on the webpage
                let catFactElement = document.getElementById('catFact');
                catFactElement.textContent = data.fact;
            })
            .catch(error => {
                console.error('Error fetching cat fact:', error);
            });
    }

    // Call fetchCatFact initially
    fetchCatFact();

    // Add event listener to fetch a new cat fact when clicking the button
    document.getElementById('newFactBtn').addEventListener('click', function() {
        fetchCatFact();
    });
    
    // Add event listener for form submission
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

        // Clear the form fields after submission
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';

        // Display a confirmation message (you can customize this)
        alert('Message sent successfully!');
    });
});
