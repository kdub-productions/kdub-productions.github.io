// Function to detect and handle color scheme changes
function handleColorSchemeChange(e) {
    if (e.matches) {
        console.log('Switched to Dark Mode');
    } else {
        console.log('Switched to Light Mode');
    }
}

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

// Initialize the theme when the page loads
setInitialTheme();

// Dynamic listener for color scheme changes
const darkSchemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
darkSchemeMediaQuery.addEventListener('change', handleColorSchemeChange);

// Call the function once to log the current color scheme
handleColorSchemeChange(darkSchemeMediaQuery);
