define(['jquery', 'modules/masonit', 'lib/jquery.cookie'], function ($, masonry) {
    var menus = {
        "Tegninger": [
            "Kull og kritt",
            "Pastellkritt",
            "Blyant",
            "Tusj",
            "Akryl",
            "Akvarell"
        ],
        "Landskap": [
            "Kun landskap",
            "Stilleben"
        ],
        "Portretter": [
            "Portrett",
            "Akt"
        ]
    };

    var setActive = function (getClass) {
        $(".active").removeClass("active");
        $("." + getClass + "").addClass("active");
        $(".item, .item2").hide();
        $("." + getClass + "").show();
        if (getClass == "all") {
            $(".item, .item2").show();
        }
        masonry.turnUp();
        generateSubmenu(getClass);
    };

    var generateSubmenu = function(getClass) {

        var items = [];
        $.each(menus, function(key, val) {
            if (getClass === key.toString()) {
                $.each(val, function(k, v) {
                    items.push("<div class='button-flat-empty " + v + "'>" + v + "</div>");
                });
            }
        });
        $(".submenus").html(items);
    };

    var setActiveAndCookie = function(that) {
        var getClass = $(that).attr("class").replace("button-flat-empty", "").replace(" ", "");
        setActive(getClass);
        $.cookie("category", getClass);
    };

    var setActiveOnLoad = function() {
        if (($.cookie("category") !== null) && $.cookie("category") !== "null") {
            setActive($.cookie("category"));
        } else {
            setActive("all");
        }
    };
    
    return {
        generateSubmenu: generateSubmenu,
        setActive: setActive,
        setActiveAndCookie: setActiveAndCookie,
        setActiveOnLoad: setActiveOnLoad
    };
});