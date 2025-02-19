// Assuming your beats are stored in an array (can be dynamically fetched or hardcoded)
const allBeats = [
    { name: "Beat 1", preview: "path/to/beat1-preview.mp3", purchaseLink: "path/to/purchase" },
    { name: "Beat 2", preview: "path/to/beat2-preview.mp3", purchaseLink: "path/to/purchase" },
    { name: "Beat 3", preview: "path/to/beat3-preview.mp3", purchaseLink: "path/to/purchase" },
    { name: "Beat 4", preview: "path/to/beat4-preview.mp3", purchaseLink: "path/to/purchase" },
    { name: "Beat 5", preview: "path/to/beat5-preview.mp3", purchaseLink: "path/to/purchase" },
    { name: "Beat 6", preview: "path/to/beat6-preview.mp3", purchaseLink: "path/to/purchase" },
    { name: "Beat 7", preview: "path/to/beat7-preview.mp3", purchaseLink: "path/to/purchase" },
    { name: "Beat 8", preview: "path/to/beat8-preview.mp3", purchaseLink: "path/to/purchase" },
    { name: "Beat 9", preview: "path/to/beat9-preview.mp3", purchaseLink: "path/to/purchase" },
    { name: "Beat 10", preview: "path/to/beat10-preview.mp3", purchaseLink: "path/to/purchase" },
    { name: "Beat 11", preview: "path/to/beat11-preview.mp3", purchaseLink: "path/to/purchase" },
    { name: "Beat 12", preview: "path/to/beat12-preview.mp3", purchaseLink: "path/to/purchase" },
    { name: "Beat 13", preview: "path/to/beat13-preview.mp3", purchaseLink: "path/to/purchase" },
    { name: "Beat 14", preview: "path/to/beat14-preview.mp3", purchaseLink: "path/to/purchase" },
    { name: "Beat 15", preview: "path/to/beat15-preview.mp3", purchaseLink: "path/to/purchase" }
];

// Settings for pagination
const beatsPerPage = 6;  // How many beats to show per page
let currentPage = 1;  // Start on the first page

function paginateBeats() {
    const start = (currentPage - 1) * beatsPerPage;
    const end = start + beatsPerPage;
    const paginatedBeats = allBeats.slice(start, end);

    // Get the container where the beats will be shown
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.innerHTML = "";  // Clear the current grid

    // Add the beats to the grid
    paginatedBeats.forEach(beat => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");

        const title = document.createElement("h3");
        title.textContent = beat.name;

        const audio = document.createElement("audio");
        audio.controls = true;
        const audioSource = document.createElement("source");
        audioSource.src = beat.preview;
        audioSource.type = "audio/mp3";
        audio.appendChild(audioSource);

        const buyButton = document.createElement("a");
        buyButton.href = beat.purchaseLink;
        buyButton.classList.add("buy-btn");
        buyButton.textContent = "Buy Now";

        gridItem.appendChild(title);
        gridItem.appendChild(audio);
        gridItem.appendChild(buyButton);
        gridContainer.appendChild(gridItem);
    });

    // Update the button states
    updateButtonStates();
}

function updateButtonStates() {
    // Show or hide pagination buttons based on the current page
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");

    prevButton.style.display = currentPage > 1 ? "inline-block" : "none";
    nextButton.style.display = currentPage * beatsPerPage < allBeats.length ? "inline-block" : "none";
}

// Handlers for pagination buttons
document.getElementById("prev-btn").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        paginateBeats();
    }
});

document.getElementById("next-btn").addEventListener("click", () => {
    if (currentPage * beatsPerPage < allBeats.length) {
        currentPage++;
        paginateBeats();
    }
});

// Initial page load
paginateBeats();
