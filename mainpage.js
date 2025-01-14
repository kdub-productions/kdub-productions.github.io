const apiKey = 'AIzaSyBWXAiWVwtsv3lrMKC3eXSQs7UqjSVWLt8';
const channelId = 'UCxLInTOesiaJPHRcr-q56aQ';
const videosPerPage = 12;
let nextPageToken = '';
let prevPageToken = '';
let videos = [];

async function fetchVideos(pageToken = '') {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&type=video&maxResults=${videosPerPage}&pageToken=${pageToken}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            console.error("API Error:", data.error.message);
            alert("An error occurred: " + data.error.message);
            return;
        }

        videos = data.items.map(item => ({
            src: `https://www.youtube.com/embed/${item.id.videoId}`,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.medium.url,
        }));

        nextPageToken = data.nextPageToken || null;
        prevPageToken = data.prevPageToken || null;

        showPage();
    } catch (error) {
        console.error("Fetch Error:", error);
        alert("Failed to fetch videos. Check the console for details.");
    }
}

function showPage() {
    const videoGrid = document.getElementById("video-grid");
    videoGrid.innerHTML = "";

    videos.forEach(video => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");

        const thumbnail = document.createElement("img");
        thumbnail.src = video.thumbnail;
        thumbnail.alt = video.title;

        const iframe = document.createElement("iframe");
        iframe.src = video.src;
        iframe.allowFullscreen = true;
        iframe.loading = "lazy";

        const playButton = document.createElement("button");
        playButton.textContent = "Play Video";

        playButton.addEventListener("click", () => {
            iframe.style.display = "block";
            playButton.style.display = "none";
            thumbnail.style.display = "none";
        });

        const description = document.createElement("p");
        description.innerHTML = `<strong>${video.title}</strong>`;

        gridItem.appendChild(thumbnail);
        gridItem.appendChild(iframe);
        gridItem.appendChild(description);
        gridItem.appendChild(playButton);
        videoGrid.appendChild(gridItem);
    });

    updateButtonStates();
}

function nextPage() {
    if (nextPageToken) {
        fetchVideos(nextPageToken);
    }
}

function previousPage() {
    if (prevPageToken) {
        fetchVideos(prevPageToken);
    }
}

function updateButtonStates() {
    document.getElementById("prev-btn").style.display = prevPageToken ? "inline-block" : "none";
    document.getElementById("next-btn").style.display = nextPageToken ? "inline-block" : "none";
}

fetchVideos();
