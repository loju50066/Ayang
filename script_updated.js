// Open Fullscreen Image
function openFullScreen(imgElement) {
    document.getElementById("fullscreen-modal").style.display = "block";
    document.getElementById("full-img").src = imgElement.src;
}

// Close Fullscreen Image
function closeFullScreen() {
    document.getElementById("fullscreen-modal").style.display = "none";
}

// Kontrol Pemutar Musik
document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("bg-music");
    var toggleBtn = document.getElementById("music-toggle");

    // Cek jika musik bisa autoplay
    audio.volume = 0.5; // Set volume default
    var isPlaying = false;

    toggleBtn.addEventListener("click", function() {
        if (isPlaying) {
            audio.pause();
            toggleBtn.textContent = "Play";
        } else {
            audio.play();
            toggleBtn.textContent = "Pause";
        }
        isPlaying = !isPlaying;
    });
});
