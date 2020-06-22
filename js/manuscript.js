(function(){
    var winW, winH;

    winH = $(window).innerHeight();

    $("body").css({
        "height" : winH,
        "display" : "flex",
        "justify-content" : "center",
        "align-items" : "center"
    });
    
})();