// Burger Menu Toggle for Mobile
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');  // Toggles the visibility of nav links
    });
});

// Ensure the video container does not resize when the play button is clicked
const videoContainers = document.querySelectorAll('.video-container');

videoContainers.forEach(container => {
    const iframe = container.querySelector('iframe');
    const playButton = container.querySelector('.play-button'); // Assuming you have a play button

    playButton.addEventListener('click', () => {
        // Make sure iframe size stays the same
        iframe.style.width = '100%';
        iframe.style.height = '100%';
    });
});

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const feedback = document.getElementById('loginFeedback');
    feedback.textContent = ''; // Clear previous feedback

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid login attempt.');
      }

      const data = await response.json();
      feedback.textContent = data.message;
      feedback.style.color = 'green';
      console.log('Token:', data.token);
    } catch (error) {
      feedback.textContent = 'Login failed. Please try again.';
      feedback.style.color = 'red';
      console.error('Error:', error);
    }
  });

  document.addEventListener('keydown', (event) => {
      const blockedKeys = ['F12', 'I', 'J', 'U'];
      const ctrlShift = event.ctrlKey && event.shiftKey;
  
      if (event.key === 'F12' || 
         (ctrlShift && blockedKeys.includes(event.key)) || 
         (event.ctrlKey)) {
          event.preventDefault();
      }
  });
  
  document.getElementById('next-btn').addEventListener('click', () => {
      console.log('Next button clicked');
      nextPage();
  });
  
  document.getElementById('prev-btn').addEventListener('click', () => {
      console.log('Previous button clicked');
      previousPage();
  });
  
particlesJS("particles-js", {
          particles: {
              number: { value: 80, density: { enable: true, value_area: 800 } },
              color: { value: "#8efef3" },
              shape: { type: "circle" },
              opacity: { value: 0.5 },
              size: { value: 3, random: true },
              line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
              move: { enable: true, speed: 6 },
          },
          interactivity: {
              detect_on: "canvas",
              events: {
                  onhover: { enable: true, mode: "repulse" },
                  onclick: { enable: true, mode: "push" },
              },
          },
          retina_detect: true,
      });

      burger.addEventListener('click', () => {
        if (navLinks.style.maxHeight) {
          navLinks.style.maxHeight = null;
        } else {
          navLinks.style.maxHeight = navLinks.scrollHeight + 'px';
        }
      });
      