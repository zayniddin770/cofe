// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();  // Prevent default anchor behavior
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80, // Adjust based on the fixed navbar height
                behavior: 'smooth'
            });
        }
    });
});

// Highlighting active section in the navbar during scroll
window.addEventListener('scroll', function () {
    let fromTop = window.scrollY + 100;  // Adjust value based on offset
    
    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        
        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Button interaction (Test Coffee Button)
document.getElementById('test-coffee-btn').addEventListener('click', function () {
    alert('Coffee testing is in progress!');
});

// Sticky navbar on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > 0);
});
