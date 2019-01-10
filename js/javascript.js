$(document).ready(function(){
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        loop: true,
        typeSpeed: 130,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true

    }); 
});

$(document).ready(function(){
     $('.work-section').magnificPopup({
          delegate: 'a', // child items selector, by clicking on it popup will open
          type: 'image',
          gallery:{enabled:true}
          // other option
    });
});

$(document).ready(function(){
      $('.owl-carousel').owlCarousel({
          items: 3,
          loop:true,
          autoplay:true,
          autoplayHoverPause:true,
          smartSpeed: 700,
          slideTransition: "ease-in",

          responsive:{
                0:{
                    items: 1
                },
                480:{
                    items: 2
                },
                768:{
                    items: 3
                }
            }
                                     
      });
});