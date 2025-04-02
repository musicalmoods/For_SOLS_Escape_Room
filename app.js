function correct(){
    const video = document.getElementById('video2');
    video.style.position = 'fixed';
    video.style.top = '0';
    video.style.left = '0';
    video.style.width = '100vw';
    video.style.height = '100vh';
    video.style.objectFit = 'cover';
    video.play();
}
function incorrect(){
    const video = document.getElementById('video');
    video.style.position = 'fixed';
    video.style.top = '0';
    video.style.left = '0';
    video.style.width = '100vw';
    video.style.height = '100vh';
    video.style.objectFit = 'cover';
    video.play();
}

const explosionVideo = document.getElementById('video');

function startTimer() {
    setTimeout(() => {
        explosionVideo.style.display = 'block';
        explosionVideo.play();
    }, 5 * 60 * 1000 + 6000);
}
window.onload = startTimer;
