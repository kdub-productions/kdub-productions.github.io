// Detect the user's preferred color scheme
function detectColorScheme() {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkScheme) {
        console.log('User prefers Dark Mode');
        return 'dark';
    }
    const prefersLightScheme = window.matchMedia('(prefers-color-scheme: light)').matches;
    if (prefersLightScheme) {
        console.log('User prefers Light Mode');
        return 'light';
    }
    console.log('User preference is not explicitly set or is unsupported');
    return 'no-preference';
}

// Initial detection
detectColorScheme();

// Dynamic listener for color scheme changes
const darkSchemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

function handleColorSchemeChange(e) {
    if (e.matches) {
        console.log('Switched to Dark Mode');
    } else {
        console.log('Switched to Light Mode');
    }
}

handleColorSchemeChange(darkSchemeMediaQuery);
darkSchemeMediaQuery.addEventListener('change', handleColorSchemeChange);

// Disable developer tools shortcuts and right-click
document.addEventListener('keydown', (event) => {
    const blockedKeys = ['F12', 'I', 'J', 'U'];
    const ctrlShift = event.ctrlKey && event.shiftKey;

    if (event.key === 'F12' || 
       (ctrlShift && blockedKeys.includes(event.key)) || 
       (event.ctrlKey && event.key === 'U')) {
        event.preventDefault();
    }
});

document.addEventListener('contextmenu', (event) => event.preventDefault());

// Set the initial theme based on system preferences or saved user preference
function setInitialTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  }
  
  // Toggle theme and save user preference
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }
  
  // Initialize the theme
  setInitialTheme();
  
  // Add event listener to the toggle button
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

  async function fetchVideos(pageToken = '') {
    document.getElementById("loading").style.display = "block";
    try {
        // Fetch API data...
    } finally {
        document.getElementById("loading").style.display = "none";
    }
}
