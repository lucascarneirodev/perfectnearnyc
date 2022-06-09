
$('.carousel2').slick({
    infinite: true,
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: false,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: '<i class="fs fa-arrow-circle-right slick-next"><img src="src/carousel/right-arrow.png" style="height: 2vh"></i>',
    prevArrow: '<i class="fas fa-arrow-circle-left slick-prev"><img src="src/carousel/left-arrow.png" style="height: 2vh"></i>',
    responsive: [{
        breakpoint: 770,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
        }
    },
    {
        breakpoint: 480,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
        }
    }
    ]
});
