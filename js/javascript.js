$(document).ready(function(){
    "use strict";
    $('.slider').ripples({
        dropRadius: 20,
        perturbance: 0.01,
  
    });
    
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        loop: true,
        typeSpeed: 130,
        showCursor: true,
        cursorChar: '/',
        autoInsertCss: true,

    });
    
    $('.work-section').magnificPopup({
          delegate: 'a', // child items selector, by clicking on it popup will open
          type: 'image',
          gallery:{enabled:true}
          // other option
    });
});