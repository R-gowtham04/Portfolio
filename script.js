// Scroll Animations
window.addEventListener('scroll', () => {
    const skills = document.querySelectorAll('.skill-card');
    const projects = document.querySelectorAll('.project-card');

    // Animate Skills on Scroll
    skills.forEach(skill => {
        if (skill.getBoundingClientRect().top < window.innerHeight) {
            skill.classList.add('fade-in');
        }
    });

    // Animate Projects on Scroll
    projects.forEach(project => {
        if (project.getBoundingClientRect().top < window.innerHeight) {
            project.classList.add('fade-in');
        }
    });
});

// Toggle between Career Card and Profile Card
document.getElementById('careerCard').addEventListener('click', function() {
    const careerCard = document.getElementById('careerCard');
    const profileCard = document.getElementById('profileCard');

    // Hide career card and show profile card
    careerCard.style.display = 'none';
    profileCard.style.display = 'block';
});

// Toggle back to Career Objective
document.getElementById('backToCareer').addEventListener('click', function() {
    const careerCard = document.getElementById('careerCard');
    const profileCard = document.getElementById('profileCard');

    // Hide profile card and show career card
    profileCard.style.display = 'none';
    careerCard.style.display = 'block';
});

// Email Send Functionality
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    // Placeholder alert for email send
    alert(`Email sent successfully!\n\nFrom: ${name} (${email})\n\nMessage:\n${message}`);

    // Clear the form after submission
    event.target.reset();
});
