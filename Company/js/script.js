$(document).ready(function () {
  $(".arrow-container").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr("href");
    let top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });

  let navbar = document.getElementById("z-index-navbar");
  let devs = document.getElementById("devs");

  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    navbar.style.top = value * 0.2 + "px";
    devs.style.left = value * 0.2 + "px";
  });
});
