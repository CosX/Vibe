$(document).ready(function(){
    var $container = $('#container');
    // initialize
    $("img").each(function(){
        var url = $(this).prop('src');
        var spinner = "../../img/spinner.gif"
        $(this).attr({"data-src": url, "src": spinner})
    });

    var holdsettimeout;
    $("img").unveil(200, function() {
        clearTimeout(holdsettimeout);
        holdsettimeout = setTimeout(function () {
            $container.masonry({
			    itemSelector : '.item',
			    isFitWidth: true,
			    gutter: 10,
			    columnWidth : 442		
            });
        }, 1000);
    });

    var myval = 0;
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
       }, 500);
    });
});
