headerAnimation();
overflowNavCollapse();
$(window).on('scroll', function() {
	headerAnimation();
});
$(window).on('resize', function(){
	overflowNavCollapse();
});
function headerAnimation() {
    if ($(window).scrollTop() > $('header').height()) {
        $('.navbar').addClass('nav-scrolled');
        $('.logo').addClass('d-none');
        $('.logo-scrolled').removeClass('d-none');
    } else {
        $('.navbar').removeClass('nav-scrolled');
        $('.logo').removeClass('d-none');
        $('.logo-scrolled').addClass('d-none');
    }
}
function overflowNavCollapse() {
    if($(window).width() <= 991) {
        $('#navContent').on('shown.bs.collapse', function() {
            $('body').addClass('overflow-hidden');
            if($(window).width() <= 575) {
                if(!$('.navbar').hasClass('nav-scrolled')) {
                    $('.logo').addClass('d-none');
                    $('.logo-scrolled').removeClass('d-none');
                }
            }
        })
        $('#navContent').on('hidden.bs.collapse', function() {
            $('body').removeClass('overflow-hidden');
            if($(window).width() <= 575) {
                if(!$('.navbar').hasClass('nav-scrolled')) {
                    $('.logo').removeClass('d-none');
                    $('.logo-scrolled').addClass('d-none');
                }
            }
        })
    }
}