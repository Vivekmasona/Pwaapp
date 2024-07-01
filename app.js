// Register the service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
    .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(error => {
        console.error('Service Worker registration failed:', error);
    });
}

// Get the audio element
const audioElement = document.getElementById('myAudio');

// Add event listener for visibility change
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Page is hidden, but audio continues to play');
        // Ensure audio continues to play when the page is hidden
        audioElement.play();
    } else {
        console.log('Page is visible');
        // Optionally perform actions when the page becomes visible again
    }
});

// Optional: Play the audio automatically when the page loads
window.addEventListener('load', () => {
    audioElement.play().catch(error => {
        console.log('Autoplay was prevented:', error);
    });
});
