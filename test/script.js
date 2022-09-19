let header = document.getElementById("header");
let stars = document.getElementById("stars");
let mountain = document.getElementById("mountain");
let clouds = document.getElementById("clouds");
let canvas_one = document.getElementById("canvas_one");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  header.style.top = value * 0.4 + "px";
  clouds.style.top = value * 0.4 + "px";
  mountain.style.top = value * 0.3 + "px";
  canvas_one.style.top = value + "px";
});

// $(".sec, .section").on("click", "a", function (event) {
//   event.preventDefault();
//   let id = $(this).attr("href");
//   let top = $(id).offset().top;
//   $("body,html").animate({ scrollTop: top }, 1500);
// });
