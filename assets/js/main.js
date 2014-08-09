require.config({
    "baseUrl": "/assets/js/",
    "paths": {
        "jquery": "lib/jquery",
        "underscore":"lib/underscore",
        "bootstrap":"lib/bootstrap"
    },
    "shim": {
        'underscore': {
            exports: '_'
        },
        "lib/jquery.cookie": ["jquery"],
        "lib/unveil": ["jquery"],
        "lib/jFeed":["jquery"],
        "bootstrap": ["jquery"]
    }
});

define(['jquery', 'modules/images', 'modules/masthead', 'modules/submenu', 'bootstrap'], function ($, images, masthead, submenu) {
    $(document).ready(function() {
        images.makeImgSpinner();
        images.showImages();

        masthead.hideOnDownScroll();

        submenu.setActiveOnLoad();
        $(".flat").on("click", ".button-flat-empty", function () {
            submenu.setActiveAndCookie(this);
        });
       
    });
    
});
