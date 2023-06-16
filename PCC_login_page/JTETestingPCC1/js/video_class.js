var video = document.querySelector('.video');
var code = document.querySelector('.code-blue');
var btn = document.getElementById('play-pause');

function togglePlayPause() {
    if(video.paused){
        btn.className = 'pause';
        video.play();
    }
    else{
        btn.className = "play";
        video.pause();
    }
}

btn.onclick = function () {
    // alert("play ME!!! DATTEBAYO")
    togglePlayPause();
};


video.addEventListener("timeupdate", function () {
    var codePos = video.currentTime / video.duration;
    code.style.width = codePos * 100 + "%";
    if(video.ended){
        btn.className = "play";
    }
});