$(document).ready(function () {
  $(".arrow-container, #page-links, .footer-text").on(
    "click",
    "a",
    function (event) {
      event.preventDefault();
      let id = $(this).attr("href");
      let top = $(id).offset().top;
      $("body,html").animate({ scrollTop: top }, 1500);
      if (document.querySelector(".ham").classList.contains("active")) {
        document.querySelector(".navbar-toggler").click();
      }
    }
  );

  $("#page-links li a").on("click", function () {
    const page_links = document.querySelectorAll("#page-links li a");
    page_links.forEach((link) => {
      link.classList.remove("active");
    });
    this.classList.add("active");
  });

  $("#portfolio span").on("click", function () {
    const portfolio_spans = document.querySelectorAll("#portfolio span");
    portfolio_spans.forEach((span) => {
      span.classList.remove("active");
    });
    this.classList.add("active");
  });
});
