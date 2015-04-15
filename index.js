/*jslint browser:true */

function setToFullHeight(el) {
    var windowHeight = $(window).height();
    el.css('height', windowHeight + 'px');
}

$(document).ready(function ($) {

    var url = window.location.hash.substring(1);

    if (url) {
        var pano = $('#pano');

        setToFullHeight(pano);
        pano.css('background-size', 'cover');
        $(window).resize(function () {
            setToFullHeight(pano);
        });
        $('.panoView').removeClass('vanished');

        pano.css('background-image', 'url("' + url + '")');
        pano.css('cursor', 'move');
        pano.cyclotron();
    } else {
        $('.mainView').removeClass('vanished');
    }

    $('#img-link-input').on('input', function () {
        var imgLink = $('#img-link-input').val();
        console.log(imgLink);
        $('#img-link-output').attr('href', 'index.html#' + imgLink);
        $('#img-link-output').removeClass('hidden');
    });
});
