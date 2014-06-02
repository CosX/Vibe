$(document).ready(function(){
    var $container = $('#container');

    //Image logic
    $("img").each(function(){
        var url = $(this).prop('src');
        var spinner = "../../img/spinner.gif";
        $(this).attr({ "data-src": url, "src": spinner });
    });

    var holdsettimeout;
    $("img").unveil(200, function() {
        clearTimeout(holdsettimeout);
        holdsettimeout = setTimeout(function () {
            mason($container);
        }, 1000);
    });

    //Remove masthead on scroll
    var lastScrollTop = 0, delta = 5;
    var holdsettimeout2;
    $(window).scroll(function(event){
        clearTimeout(holdsettimeout2);
        holdsettimeout2 = setTimeout(function () {
           var st = $(this).scrollTop();
       
           if(Math.abs(lastScrollTop - st) <= delta)
              return;
       
           if (st > lastScrollTop){
                $('.navbar').animate({
                'margin-top': '-55px'
            }, 500);
           } else {
                $('.navbar').animate({
                'margin-top': '0'
            }, 500);
           }
           lastScrollTop = st;
       }, 100);
    });

    //Set active onclick 
    $(".button-flat-empty").click(function () {
        var getClass = $(this).attr("class").replace("button-flat-empty", "").replace(" ", "");
        setActive($container, getClass);
        $.cookie("category", getClass);
    });

    //Set active onload
    if (($.cookie("category") !== null) || $.cookie("category") !== "null") {
        setActive($container, $.cookie("category"));
    } else {
        setActive($container, "all");
    }
});

var setActive = function($container, getClass) {
    $(".active").removeClass("active");
    $("." + getClass + "").addClass("active");
    $(".item, .item2").hide();
    $("." + getClass + "").show();
    if (getClass == "all") {
        $(".item, .item2").show();
    }
    mason($container);
};

var mason = function ($container) {
    $container.masonry({
        itemSelector: '.item, .item2',
        isFitWidth: true,
        gutter: 10,
        columnWidth: 442
    });
}
