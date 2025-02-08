document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const icon = document.getElementById('dark-mode-icon');

    // Load saved theme preference
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark');
        icon.classList.replace('fa-moon', 'fa-sun'); // Change to sun icon
    }

    // Toggle dark mode and update navbar colors
    toggleButton.addEventListener('click', function() {
        body.classList.toggle('dark');
        if (body.classList.contains('dark')) {
            localStorage.setItem('dark-mode', 'enabled');
            icon.classList.replace('fa-moon', 'fa-sun'); // Show sun in dark mode
        } else {
            localStorage.setItem('dark-mode', 'disabled');
            icon.classList.replace('fa-sun', 'fa-moon'); // Show moon in light mode
        }
    });
});
