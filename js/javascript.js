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
});