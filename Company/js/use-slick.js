$(document).ready(function () {
  $(".carousel_inner")
    .not(".slick-initialized")
    .slick({
      centerMode: true,
      centerPadding: "0px",
      speed: 800,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      lazyLoad: "ondemand",
      // adaptiveHeight: true,
      // variableWidth: true,
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 576,
          settings: {
          },
        },
        {
          breakpoint: 1,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
          },
        },
      ],
    });
});
