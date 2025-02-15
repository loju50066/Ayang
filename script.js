// Open Fullscreen Image
function openFullScreen(imgElement) {
    document.getElementById("fullscreen-modal").style.display = "block";
    document.getElementById("full-img").src = imgElement.src;
}

// Close Fullscreen Image
function closeFullScreen() {
    document.getElementById("fullscreen-modal").style.display = "none";
}