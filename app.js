var video = document.getElementById("bgvid"),
pauseButton = document.querySelector("button");

function vidFade() {
  video.classList.add("stopfade");
}

video.addEventListener('ended', function() {
  // only functional if "loop" is removed 
  video.pause();
  vidFade();
}, false); 
 
pauseButton.addEventListener("click", function() {
  video.classList.toggle("stopfade");
  if (video.paused) {
    video.play();
    pauseButton.innerHTML = "II";
  } else {
    video.pause();
    pauseButton.innerHTML = "&#9655;";
  }
}, false);

video.addEventListener('touchstart', function(e) {
  e.preventDefault();
  video.play();
})