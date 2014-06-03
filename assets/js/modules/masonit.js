define(["lib/masonry.pkgd.min"], function (masonry) {
    var colwidth = 442, gutter = 10;

    var init = function () {
        new masonry('#container', {
            itemSelector: '.item, .item2',
            isFitWidth: true,
            gutter: gutter,
            columnWidth: colwidth
        });
    };

    return {
        turnUp: init
    };
});



