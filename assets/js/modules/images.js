
define(['jquery', 'modules/masonit', 'lib/unveil'], function ($, masonry) {
    var showImages = function() {
        var holdsettimeout;
        $("img").unveil(200, function () {
            clearTimeout(holdsettimeout);
            holdsettimeout = setTimeout(function () {
                masonry.turnUp();
            }, 1000);
        });
    };

    return {
        showImages: showImages
    };
});



