
define(['jquery', 'modules/masonit', 'lib/unveil'], function ($, masonry) {
    var spinner = "../../img/spinner.gif";

    var makeImgSpinner = function() {
        $("img").each(function() {
            var url = $(this).prop('src');
            $(this).attr({ "data-src": url, "src": spinner });
        });
    };

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
        makeImgSpinner: makeImgSpinner,
        showImages: showImages
    };
});



