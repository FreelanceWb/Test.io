$(".nav-item a, .arrow-link, .logo a").on("click", function (event) {
  event.preventDefault();
  let id = $(this).attr("href");
  let top = $(id).offset().top;
  $("body, html").animate({ scrollTop: top - 150 }, 500);

  if ($("#check").is(":checked")) {
    $("#check").prop("checked", false);
    $("#canvas, body, html").toggleClass("lock");
  }
});

$("#page-links li a").on("click", function () {
  const page_links = document.querySelectorAll("#page-links li a");
  page_links.forEach((link) => {
    link.classList.remove("active");
  });
  this.classList.add("active");
});

$(".burger-button").on("click", function (e) {
  e.preventDefault();
  $("#canvas, body, html").toggleClass("lock");

  if ($("#check").is(":checked")) {
    $("#check").prop("checked", false);
  } else {
    $("#check").prop("checked", true);
  }
});

function handleDragStart(e) {
  this.style.opacity = "0.4";

  dragSrcEl = this;

  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/html", this.innerHTML);
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }

  return false;
}

function handleDragEnter(e) {
  this.classList.add("over");
}

function handleDragLeave(e) {
  this.classList.remove("over");
}

function handleDragEnd(e) {
  this.style.opacity = "1";
}

function handleDrop(e) {
  e.stopPropagation();
  if (dragSrcEl !== this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData("text/html");
  }

  return false;
}

let items = document.querySelectorAll(".skill-block");
items.forEach(function (item) {
  item.addEventListener("dragstart", handleDragStart);
  item.addEventListener("dragover", handleDragOver);
  item.addEventListener("dragenter", handleDragEnter);
  item.addEventListener("dragleave", handleDragLeave);
  item.addEventListener("dragend", handleDragEnd);
  item.addEventListener("drop", handleDrop);
});

const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 0,
  },
  speed: 3000, //add
  slidesPerView: 1, //add
  spaceBetween: 10,
  // forceLoop: true,
  breakpoints: {
    // when window width is >= 320px
    425: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    1024: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    1440: {
      slidesPerView: 5,
    },
  },
});

swiper.el.addEventListener("mouseover", function () {
  //add
  swiper.autoplay.stop(); //add
}); //add
swiper.el.addEventListener("mouseleave", function () {
  //add
  swiper.autoplay.start(); //add
});
