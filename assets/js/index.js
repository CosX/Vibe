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
});
