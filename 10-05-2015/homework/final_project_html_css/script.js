
// To change the font of the logo randomly
// $(document).ready(function(){
//   var fonts = ['Droid Serif','Open Sans'];                
//   var rand = Math.floor(Math.random()*fonts.length);           
//   $('.logo').css('font-family', fonts[rand]);
// });

//gallery

$(document).ready(function(){
  $('.examples').slick({
    dots: true,
    infinite: true,
    speed: 100,
    fade: true,
    arrows:true,
    cssEase: 'linear'
  });
});

// Interactive section

var titleSize = 0;

$('#titleSize').click(function() {
    if (titleSize == 5) {
        titleSize = 0;
        $('.title').css('font-size','12px');
    }
    else {
        titleSize++;
        $('.title').css('font-size','+=4');      
    }
    });

$('#subtitleSize').click(function() {
    if (titleSize == 5) {
        titleSize = 0;
        $('.subtitle').css('font-size','12px');
    }
    else {
        titleSize++;
        $('.subtitle').css('font-size','+=4');      
    }
    });


var fontGeorgia = true;

$('#paragraphFont').click(function() {
  if(fontGeorgia == true) {
       $('.regular').css('font-family','arial');
       fontGeorgia = false;
    }
    else {
       $('.regular').css('font-family','georgia');
       fontGeorgia = true;
    }
});

var changeSize = 0;

$('#changeSize').click(function() {
    if (changeSize == 5) {
        changeSize = 0;
        $('.regular').css('font-size','12px');
    }
    else {
        changeSize++;
        $('.regular').css('font-size','+=4');      
    }
    });


var changeWidth = 0;

$('#changeWidth').click(function() {
    if (changeWidth == 5) {
        changeWidth = 0;
        $('.text p').css('width','30%');
    }
    else {
        changeWidth++;
        $('.text p').css('width','+=100');      
    }
    });

var changeLineHeight = 0;

$('#changeHeight').click(function() {
    if (changeLineHeight == 5) {
        changeLineHeight = 0;
        $('.text p').css('line-height','1');
    }
    else {
        changeLineHeight++;
        var currentLineHeightPx = parseInt($('.text p').css('line-height'));
        var currentFontSizePx = parseInt($('.text p').css('font-size'));
        var currentLineHeight = currentLineHeightPx/currentFontSizePx;

        var newLineHeight = currentLineHeight * 1.1;

        console.log(newLineHeight)


        $('.text p').css('line-height', newLineHeight);

    }
});


var result = 0;
    
    $('.checkResult').click(function() {
    if($('.regular').css('font-size') == '28px'){
        result++;
        $('.result').html(result);      
        console.log(result);
    }
    });
