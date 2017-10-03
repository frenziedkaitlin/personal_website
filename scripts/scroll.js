$(document).ready(function(){
    $("#totop").click(function(){
        $('html, body').animate({scrollTop : 0}, 800);
        return false;
    });
});
var currentPost = function() { 
    var wintop = $(document).scrollTop();

    var boxes = $(".block"),
    topSection = null,
    minDist = Infinity;

    boxes.each(function() {
        var top = $(this).offset().top,
            bottom = top + $(this).innerHeight(),

            relativeDistance = Math.min(
            Math.abs(top - wintop), 
            Math.abs(bottom - wintop)
            );
        if (relativeDistance < minDist) {
            minDist = relativeDistance;
            topSection = this;
        }
    });
    return topSection;
    };
var speed = 100;
Mousetrap.bind('right', function(){
    $("html, body").animate({ scrollTop: $(currentPost()).next().offset().top }, speed);
});
Mousetrap.bind('left', function() {             
    $("html, body").animate({ scrollTop: $(currentPost()).prev().offset().top }, speed);
});

$(document).ready( function() {
    $("#topmenu").hide(); //hide your div initially
    var topOfOthDiv = $("#now").offset().top - 1;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
            $(".menu").show(); //reached the desired point -- show div
        }
        else if($(window).scrollTop() < topOfOthDiv) { //scrolled past the other div?
            $("#topmenu").hide(); //reached the desired point -- show div
        }
    });
});
