// Function to detect the user's preferred color scheme
        function detectColorScheme() {
            const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const prefersLightScheme = window.matchMedia('(prefers-color-scheme: light)').matches;

            if (prefersDarkScheme) {
                console.log('User prefers Dark Mode');
                return 'dark';
            } else if (prefersLightScheme) {
                console.log('User prefers Light Mode');
                return 'light';
            } else {
                console.log('User preference is not explicitly set or is unsupported');
                return 'no-preference';
            }
        }

        // Automatically log the current mode when the page loads
        detectColorScheme();

        // Add a listener to detect changes in the color scheme dynamically
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (e.matches) {
                console.log('Switched to Dark Mode');
            } else {
                console.log('Switched to Light Mode');
            }
        });