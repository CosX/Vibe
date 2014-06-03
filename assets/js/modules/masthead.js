define(['jquery'], function ($) {
    var lastScrollTop = 0, delta = 5, holdsettimeout2, animSpeed = 500, hangtime = 100;

    var hideOnDownScroll = function () {
        $(window).scroll(function () {
            clearTimeout(holdsettimeout2);
            holdsettimeout2 = setTimeout(function () {
                var st = $(this).scrollTop();
                if (Math.abs(lastScrollTop - st) <= delta)
                    return;
                if (st > lastScrollTop) {
                    $('.navbar').animate({
                        'margin-top': '-55px'
                    }, animSpeed);
                } else {
                    $('.navbar').animate({
                        'margin-top': '0'
                    }, animSpeed);
                }
                lastScrollTop = st;
            }, hangtime);
        });
    }

    return {
        hideOnDownScroll: hideOnDownScroll
    };
});
