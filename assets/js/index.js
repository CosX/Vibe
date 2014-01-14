$(document).ready(function(){
    var $container = $('#container');
    // initialize
    setTimeout(function(){
        $container.masonry({
      columnWidth: 100,
      itemSelector: '.item'
    });
        }, 10);
    
});
