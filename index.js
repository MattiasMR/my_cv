document.addEventListener('DOMContentLoaded', function() {
  const aboutMeLink = document.querySelector('a[href="#about-me"]');
  const skillsLink = document.querySelector('a[href="#skills"]');
  const projectsLink = document.querySelector('a[href="#projects"]');

  if (aboutMeLink) {
    aboutMeLink.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('About Me clicked');
      document.querySelector('#about-me').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    });
  }

  if (skillsLink) {
    skillsLink.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Skills clicked');
      const skillsSection = document.querySelector('#skills');
      if (skillsSection) {
        skillsSection.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      } else {
        console.log('Skills section not found');
      }
    });
  }

  if (projectsLink) {
    projectsLink.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Projects clicked');
      const projectsSection = document.querySelector('#projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      } else {
        console.log('Projects section not found');
      }
    });
  }
});
