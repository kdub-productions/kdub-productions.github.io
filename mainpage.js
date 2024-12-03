// Pagination and Video Display
let currentPage = 1;
const videosPerPage = 10;

// Sample video data (you can add more as needed)
const videos = [
    { src: "https://www.youtube.com/embed/XTTe5UjDwXY", title: "Song 1", artist: "Artist 1" },
    { src: "https://www.youtube.com/embed/SEL1v-7lhwI", title: "Song 2", artist: "Artist 2" },
    { src: "https://www.youtube.com/embed/d6AtMN7WOD8", title: "Song 3", artist: "Artist 3" },
    { src: "https://www.youtube.com/embed/Hi8UVclYgug", title: "Song 4", artist: "Artist 4" },
    { src: "https://www.youtube.com/embed/VIDEO_5", title: "Song 5", artist: "Artist 5" },
    { src: "https://www.youtube.com/embed/VIDEO_6", title: "Song 6", artist: "Artist 6" },
    { src: "https://www.youtube.com/embed/VIDEO_7", title: "Song 7", artist: "Artist 7" },
    { src: "https://www.youtube.com/embed/VIDEO_8", title: "Song 8", artist: "Artist 8" },
    { src: "https://www.youtube.com/embed/VIDEO_9", title: "Song 9", artist: "Artist 9" },
    { src: "https://www.youtube.com/embed/VIDEO_10", title: "Song 10", artist: "Artist 10" },
    // Add more videos as needed
];

// Calculate total pages
const totalPages = Math.ceil(videos.length / videosPerPage);

// Function to show the videos for the current page
function showPage(page) {
    currentPage = page;
    const videoGrid = document.getElementById("video-grid");
    videoGrid.innerHTML = ""; // Clear current videos

    // Generate the videos for the current page
    for (let i = (currentPage - 1) * videosPerPage; i < currentPage * videosPerPage; i++) {
        if (i >= videos.length) break; // Stop if we reach the end of the video list

        const iframe = document.createElement("iframe");
        iframe.src = videos[i].src;
        iframe.allowFullscreen = true;
        iframe.classList.add("grid-item");

        const description = document.createElement("p");
        description.innerHTML = `<strong>Song:</strong> ${videos[i].title} <br><strong>Artist:</strong> ${videos[i].artist}`;

        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.appendChild(iframe);
        gridItem.appendChild(description);

        videoGrid.appendChild(gridItem);
    }

    // Update button states based on the current page
    updateButtonStates();
}

// Function to go to the next page
function nextPage() {
    if (currentPage < totalPages) {
        showPage(currentPage + 1);
    }
}

// Function to go to the previous page
function previousPage() {
    if (currentPage > 1) {
        showPage(currentPage - 1);
    }
}

// Function to update the states of the pagination buttons
function updateButtonStates() {
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    // Disable the previous button on the first page
    prevBtn.disabled = currentPage === 1;
    prevBtn.style.display = currentPage === 1 ? "none" : "inline-block"; // Hide the button if on the first page

    // Hide the next button when we reach the last page
    nextBtn.style.display = currentPage === totalPages ? "none" : "inline-block"; // Hide the button if on the last page
}

// Initially show the first page
showPage(currentPage);
