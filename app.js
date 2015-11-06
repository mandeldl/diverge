// Video on Landing Page:

var video = document.getElementById("bgvid"),
pauseButton = document.getElementById("pausePlay");

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

// NAV/Hamburger menu

$( "#nav-toggle" )
  .on( "click", function() {
    $(this).toggleClass("active");
    $("ul.menubar").slideToggle();
  });

  $('li').click(function () {
    $('li').removeClass('selected');
    $(this).toggleClass('selected');
    if ($('#nav-toggle').css('display') != 'none') {
      $( "#nav-toggle" ).trigger('click');
    };
    var page = $(this).data('link');
    var url = page + ".html";
    $.get(url, function(data) {
      $('body').removeClass().addClass(page);
      $('.container').html(data);
    });
  })