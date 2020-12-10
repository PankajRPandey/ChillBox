$(document).on('click', '.sidenav a', function (event) {
    var change = $(this).attr("data-videoId");
    $(".yt-vid > iframe").attr("src", "https://www.youtube.com/embed/" + change +"?vq=hd1080&rel=0&modestbranding=1&color=white&autoplay=1");
});

// $(document).ready(function(){
//     $(".hiddendiv").mouseenter(function(){
//       $(".sidenav").show();
//     });
//     $(".sidenav").mouseleave(function(){
//       $(".sidenav").delay(1000).hide(0);
//     });
//   });

$(function(){
  // When page loads, wait 3 seconds and hide all elements with .barhide class:
  setTimeout(toggle, 3000);
});

var timer = null;

// General function for adding/removing the "hide" class.
// This is used when the page first loads and each time
// the mouse moves on the page. We're not calling toggle()
// here because a flicker effect can happen which would leave
// the elements showing instead of being hidden.
function toggle(){
  $('.sidenav').toggleClass('hide');
}

$(window).on('mousemove', function(){
  // When anywhere on page is moused over bring back .barhide
  // elements for 3 seconds. Removing "hide" simply restores
  // the original CSS & layout
  $('.sidenav').removeClass('hide');
  
  // Kill any previous timers
  clearTimeout(timer);
  
  // Wait 3 seconds and hide again
  timer = setTimeout(toggle, 3000)
});

