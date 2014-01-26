$(document).ready(function(){
    var $container = $('#container');
    // initialize
    $("img").each(function(){
        var url = $(this).prop('src');
        var spinner = "../../img/spinner.gif"
        $(this).attr({"data-src": url, "src": spinner})
        });

    $("img").unveil();

    setTimeout(function(){
        $container.masonry({
			itemSelector : '.item',
			isFitWidth: true,
			transitionDuration: 0,
			gutter: 10,
			columnWidth : 442		
        });
        
    }, 10);
});
