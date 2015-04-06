/*jslint browser:true */

$(document).ready(function ($) {

    var url = window.location.hash.substring(1);

    if (url) {
        $('.panoView').removeClass('vanished');
        var tmpImg = new Image();
        tmpImg.src = url;

        $(tmpImg).one('load', function () {

            function setImageHeight() {
                var windowHeight = $(window).height();
                var height = tmpImg.height;
                if (height > windowHeight) {
                    height = windowHeight;
                }
                $('#pano').css('height', height + 'px');
                $('#pano').css('background-size', 'auto ' + height + 'px');
            }

            setImageHeight();
            $(window).resize(setImageHeight);

            $('#pano').css('background-image', 'url(' + url + ')');
            $('#pano').css('cursor', 'move');
            $('#pano').cyclotron();
        });

    } else {
        $('.mainView').removeClass('vanished');
    }

    console.log($('#img-link-input'));
    $('#img-link-input').on('input', function () {
        console.log($('#img-link-output'));
        $('#img-link-output').removeClass('hidden');
    });
});
