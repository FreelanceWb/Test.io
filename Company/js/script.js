$(document).ready(function () {
  $(".arrow-container, #page-links, .footer-text").on(
    "click",
    "a",
    function (event) {
      event.preventDefault();
      let id = $(this).attr("href");
      let top = $(id).offset().top;
      $("body,html").animate({ scrollTop: top }, 1500);
      document.querySelector(".navbar-toggler").click();
    }
  );

  let navbar = document.getElementById("z-index-navbar");
  let devs = document.getElementById("devs");
  const canvas = document.getElementById("canvas_one");
  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    navbar.style.top = value * 0.2 + "px";
    devs.style.left = value * 0.2 + "px";
    canvas.style.top = value * 0.9 + "px";
  });

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

  $(".service-block").on("click", function () {
    const service_blocks = document.querySelectorAll(".service-block");
    service_blocks.forEach((block) => {
      block.classList.remove("active");
    });
    this.classList.add("active");
  });
});
