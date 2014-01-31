$(document).ready(function(){
    var $container = $('#container');
    // initialize
    $("img").each(function(){
        var url = $(this).prop('src');
        var spinner = "../../img/spinner.gif"
        $(this).attr({"data-src": url, "src": spinner})
        });

    $("img").unveil(200, function() {
        $container.masonry({
			itemSelector : '.item',
			isFitWidth: true,
			gutter: 10,
			columnWidth : 442		
        });
    });
});
