$(document).ready(function(){
    var $container = $('#container');
    // initialize
    setTimeout(function(){
        $container.masonry({
      columnWidth: 200,
      itemSelector: '.item'
    });
        }, 10);
    
});
