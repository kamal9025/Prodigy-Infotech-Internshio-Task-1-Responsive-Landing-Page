// JavaScript to handle section display and scroll effect
const navbar = document.getElementById('navbar');

// Function to handle navbar color change on scroll
window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

// Function to display the correct section based on user click
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections
