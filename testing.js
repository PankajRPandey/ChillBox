$(document).on('click', '.videos a', function (event) {
    var change = $(this).attr("data-videoId");
    console.log(change + "!@#$$$^^$^^&$&$&$^%#%^$^#%#^^");
    $(".ph-master-video-section > iframe").attr("src", "https://www.youtube.com/embed/" + change +"?vq=hd1080&rel=0&modestbranding=1&color=white&autoplay=1");
});