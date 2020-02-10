$(document).ready(function() {
  var typed = new Typed("#typed", {
    stringsElement: "#typed-strings",
    loop: true,
    typeSpeed: 130,
    showCursor: true,
    cursorChar: "|",
    autoInsertCss: true
  });
});

$(document).ready(function() {
  $(".work-section").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: { enabled: true }
    // other option
  });
});

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    smartSpeed: 700,
    slideTransition: "ease-in",

    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      }
    }
  });
});
// Logo slider
$(document).ready(function() {
  $(".customer-logos").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });
});
