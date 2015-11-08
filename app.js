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

// NAV/Hamburger menu (mobile)

$( "#nav-toggle" ).on( "click", function() {
    $(this).toggleClass("active");
    $("ul.menubar").slideToggle();
  });

// menubar styling
$('li').click(function () {
  $('li').removeClass('selected');
  $(this).toggleClass('selected');
  if ($('#nav-toggle').css('display') != 'none') { //Only do this if the hamburger menu is visbile, i.e, mobile:
    $( "#nav-toggle" ).trigger('click');
  };
  // Change page
  var page = $(this).data('link');
  var url = page + ".html";
  $.get(url, function(data) {
    $('body').removeClass().addClass(page);
    $('.container').html(data);
  });
});



// REFACTOR FROM CODEPEN:
// $('button#clone').click(function() {
//   $('div.box').first().clone().appendTo('.box').addClass("clone");
// });

// $('button#clear').click(function() {
//   $('.clone').remove();
// });

// $('button#spread').click(function() {
//   setTimeout(function() {
//     // Code for click event
//     blah();
//     // this code will run after the duration elaspes
//   }, 500);
// });

// $('button#fade').click(function() {
//   // $('.box').fadeOut({
//   //   duration: 'slow',
//   //   easing: 'linear',
//   //   queue: false
//   // }).animate({'transform': 'translateX(-200px)'}, {queue: false}); 
// $('.box').animate({'left': '-=100px'}, {queue: false}).fadeOut({
//     done: function(){
//       $('.container').prepend('<div class="box"></div>'); 
//     }});
// });

// function blah() {
//   $('.box').fadeOut({
//     duration: 1000,
//     easing: 'linear',
//     progress: $('.box').addClass('transform')
//   });
// }