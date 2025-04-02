function correct() {
    const video = document.getElementById('video2');
    video.style.position = 'fixed';
    video.style.top = '0';
    video.style.left = '0';
    video.style.width = '100vw';
    video.style.height = '100vh';
    video.style.objectFit = 'cover';
    video.play();
}

function incorrect() {
    const video = document.getElementById('video');
    video.style.position = 'fixed';
    video.style.top = '0';
    video.style.left = '0';
    video.style.width = '100vw';
    video.style.height = '100vh';
    video.style.objectFit = 'cover';
    video.play();
}

function startTimer() {
    const explosionVideo = document.getElementById('video');
    setTimeout(() => {
        explosionVideo.style.display = 'block';
        explosionVideo.style.position = 'fixed';
        explosionVideo.style.top = '0';
        explosionVideo.style.left = '0';
        explosionVideo.style.width = '100vw';
        explosionVideo.style.height = '100vh';
        explosionVideo.style.objectFit = 'cover';
        explosionVideo.play().catch(error => {
            console.error('Error playing the video:', error);
        });
    }, 5*60*1000+6000);
}

document.addEventListener('DOMContentLoaded', startTimer);
