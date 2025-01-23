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

        // Optional: You can add a custom method to trigger play on iframe (if you use YouTube API or others)
        // You might use the YouTube API to start the video
    });
});
