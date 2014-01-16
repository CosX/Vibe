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
      columnWidth: 100,
      itemSelector: '.item'
    });
        }, 10);
});
