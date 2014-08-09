define(['jquery', 'modules/masonit', 'modules/getRSSFeed', 'lib/jquery.cookie'], function ($, masonry, rss) {
    var menus = {
        "Tegninger": [
            "Kull",
            "Pastellkritt",
            "Blyant",
            "Tusj",
            "Akryl",
            "Akvarell"
        ],
        "Landskap": [
            "Landskap",
            "Stilleben"
        ],
        "Portretter": [
            "Portrett",
            "Akt"
        ]
    };

    //Little off...
    var setActive = function (getClass) {
        var $getClass = $("." + getClass);
        if (getClass.split("-")[0] === "Under") {
            $(".submenus .active").removeClass("active");
        } else {
            $(".active").removeClass("active");
        }
        
        $getClass.addClass("active");
        $(".item, .item2").hide();
        $getClass.show();

        rss.rendercategory(getClass);
        generateSubmenu(getClass);
    };

    var generateSubmenu = function (getClass) {

        var items = [];
        $.each(menus, function (key, val) {
            if (getClass.split("-")[1] === key) {
                $.each(val, function (k, v) {
                    items.push("<div class='button-flat-empty Under-" + v + "'>" + v + "</div>");
                });
            } else {
                $.each(val, function (k, v) {
                    if (getClass.split("-")[1] === v) {
                        $("." + key).addClass("active");

                        $.each(val, function (kt, va) {
                            if (va === v) {
                                items.push("<div class='button-flat-empty active Under-" + va + "'>" + va + "</div>");
                            } else {
                                items.push("<div class='button-flat-empty Under-" + va + "'>" + va + "</div>");
                            }

                        });
                    }
                });
            }
        });
        $(".submenus").html(items);
    };

    var setActiveAndCookie = function (that) {
        var getClass = $(that).attr("class").replace("button-flat-empty", "").replace(" ", "");
        setActive(getClass);
        $.cookie("category", getClass);
    };

    var setActiveOnLoad = function () {
        if (($.cookie("category") !== null) && $.cookie("category") !== "null" && $.cookie("category") !== undefined) {
            setActive($.cookie("category"));
        } else {
            $.cookie("category", "Hoved-Landskap");
            setActiveOnLoad();
        }
    };

    return {
        generateSubmenu: generateSubmenu,
        setActive: setActive,
        setActiveAndCookie: setActiveAndCookie,
        setActiveOnLoad: setActiveOnLoad
    };
});
