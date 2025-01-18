m// script.js
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton2');
    const popOutMenu = document.getElementById('artist_div_grid');
  
    menuButton.addEventListener('click', () => {
      popOutMenu.classList.toggle('visible');
    });
  
    // Optional: Close menu when clicking outside of it
    document.addEventListener('click', (event) => {
      if (!menuButton.contains(event.target) && !popOutMenu.contains(event.target)) {
        popOutMenu.classList.remove('visible');
      }
    });
  });
  