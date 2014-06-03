require.config({
    "baseUrl": "/assets/js/",
    "paths": {
        "jquery": "lib/jquery"
    },
    "shim": {
        "lib/jquery.cookie": ["jquery"],
        "lib/unveil": ["jquery"]
    }
});

define(['jquery', 'modules/images', 'modules/masthead', 'modules/submenu'], function ($, images, masthead, submenu) {
    $(document).ready(function() {
        images.makeImgSpinner();
        images.showImages();

        masthead.hideOnDownScroll();

        submenu.setActiveOnLoad();
        $(".button-flat-empty").click(function(){
            submenu.setActiveAndCookie(this);
        });
    });
    
});