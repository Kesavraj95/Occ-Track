$(document).ready(function () {
    function autochange() {
        var activeimage = $('.imageshown');
        var nextimage = activeimage.next();
        if (nextimage.length == 0) {
            nextimage = $('.sliderinner img').first();
        }
        activeimage.removeClass('imageshown').addClass('imagehidden');
        nextimage.removeClass('imagehidden').addClass('imageshown')
    }

    $("#next").on("click", function () {
        autochange();
    });
    $("#previous").on("click", function (e) {
        var activeimage = $('.imageshown');
        var nextimage = activeimage.prev();
        if (nextimage.length == 0) {
            nextimage = $('.sliderinner img').last();
        }
        activeimage.removeClass('imageshown').addClass('imagehidden');
        nextimage.removeClass('imagehidden').addClass('imageshown')
        e.preventDefault();
    });
    setInterval(autochange, 5000);
})