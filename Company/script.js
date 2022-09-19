let back = document.getElementById("back");
let ball = document.getElementById("ball");
let ball_2 = document.getElementById("ball-2");
let lines = document.getElementById("lines");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  back.style.top = value * 0.4 + "px";
  ball.style.top = value * 0.4 + "px";
  ball_2.style.top = value * 0.4 + "px";
  lines.style.top = value * 0.3 + "px";
});

// $(".sec, .section").on("click", "a", function (event) {
//   event.preventDefault();
//   let id = $(this).attr("href");
//   let top = $(id).offset().top;
//   $("body,html").animate({ scrollTop: top }, 1500);
// });