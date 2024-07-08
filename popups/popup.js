document.addEventListener('DOMContentLoaded', function() {
    const greetButton = document.getElementById('greetButton');
    greetButton.addEventListener('click', function() {
        const name = document.getElementById('nameInput').value;
        const greeting = document.getElementById('greeting');
        if (name) {
            greeting.textContent = `Hello, ${name}!`;
        } else {
            greeting.textContent = `Please enter your name.`;
        }
    });
});
