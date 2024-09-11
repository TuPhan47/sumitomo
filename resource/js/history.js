// Anchor Link
$(function() {
    $('body').on('click', 'a[href^="#"]:not([href="#top"])',function(){
        var href= $(this).attr('href');
        var target = $(href === '#' || href === '' ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position}, 500, 'swing');
        return false;
    });
});  

// Modal
$('.openModal').on('click', function(e) {
    var getId = $(this).attr("href");
    $('[id^="modal"]').hide();
    $('[id^="modal"]').removeClass('active');
    $('html').addClass('modal-lock');
    $(getId).fadeIn(500);
});

$(".closeModal").on('click', function(e) {
    $('[id^="modal"]').fadeOut(500, function(){
        setTimeout(function(){
            $('html').removeClass('modal-lock');
        },600)
    });
});

$(".box-modal").on('click', function(e) {
    $('[id^="modal"]').fadeOut(500, function(){
        setTimeout(function(){
            $('html').removeClass('modal-lock');
        },600)
    });
});

function adjustModalSize(){
    var windowHeight = $(window).height();
    var modal = $('.box-modal__inner');
    var modalImg = $('.box-modal__img');
    var modalImgChild = $('.box-modal__img img');
    var modalRow = $('.box-modal__row');
    var modalHeight = windowHeight - 100;
    var modalRowHeight = ((modalHeight - 136) / 2);

    if (windowHeight <= 700) {
        modal.css({
            'height': modalHeight,
        });
        modalRow.css({
            'height': modalRowHeight,
            'margin': '10px 0 0',
        });
        modalImg.css({
            'text-align': 'center',
        });
        modalImgChild.css({
            'width': 'auto',
            'height': '100%',
        });
    }
}

adjustModalSize();

$(window).resize(function() {
    adjustElementSize();
});