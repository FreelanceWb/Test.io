$(document).ready(function () {
  $(".carousel_inner")
    .not(".slick-initialized")
    .slick({
      speed: 800,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            centerMode: true,
            centerPadding: "40px",
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            variableWidth: true,
          },
        },
      ],
    });
});
