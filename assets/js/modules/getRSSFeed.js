
define(['jquery', 'underscore', 'modules/masonit', 'lib/jFeed'], function ($, _, masonry) {

    var rendercategory = function (category) {
        var url = '/tag/' + category.replace("active", "").replace(" ", "").toLowerCase() + '/rss/';
        $.getFeed({
            url: url,
            success: function (feed) {
                var list = [];
                _.each(feed.items, function (e) {
                    var obj = {};
                    obj.title = e.title;
                    obj.url = e.link;
                    obj.img = $("img", e.description)[0].outerHTML;
                    obj.exerpt = $("<div/>").html(e.description).text().substring(0, 70) + "...";
                    list.push(obj);
                });
               

                $.get('/assets/js/Templates/imagenode.htm', function (template) {
                    $('.gallery').empty().html(_.template(template, { items: list })).promise().done(function () {
                        masonry.turnUp();
                    });
                });
            }
        });
    };

    return {
        rendercategory: rendercategory
    };
});