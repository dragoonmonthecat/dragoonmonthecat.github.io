// Navigation buttons
const homeBtn = document.querySelector('.home-icon');
const aboutBtn = document.querySelector('.about-icon');
const projectsBtn = document.querySelector('.projects-icon');
const skillsBtn = document.querySelector('.skills-icon');
const contactBtn = document.querySelector('.contact-icon');

// page sections
const intro = document.querySelector('.introduction');
const about = document.querySelector('.about');
const projects = document.querySelector('.projects');
const skills = document.querySelector('.skills');
const contact = document.querySelector('.contact');


// OnClick event listeners to then scroll to page (page is quite small so unecessary but it's nice if there was more to the page)
homeBtn.addEventListener('click', () =>
{
   intro.scrollIntoView({behavior: 'smooth'});
});

aboutBtn.addEventListener('click', () =>
{
    about.scrollIntoView({behavior: 'smooth'});
});

projectsBtn.addEventListener('click', () => {
    projects.scrollIntoView({behavior: 'smooth'});
});

skillsBtn.addEventListener('click', () => {
    skills.scrollIntoView({behavior: 'smooth'})
});

contactBtn.addEventListener('click', () => {
    contact.scrollIntoView({behavior: 'smooth'});
});