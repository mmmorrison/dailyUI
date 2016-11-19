$(document).ready(function() {
  // Click fonts button and shows font options
  $('.fontsButton').click(function () {
    if ($('.ChangeFont').css('visibility') == 'hidden'){
      $('.ChangeFont').css('visibility', 'visible');
    }else{
      $('.ChangeFont').css('visibility', 'hidden');
    }
  });

  // Click colors button and shows color options
  $('.colorsButton').click(function () {
    if ($('.ChangeColor').css('visibility') == 'hidden'){
      $('.ChangeColor').css('visibility', 'visible');
    }else{
      $('.ChangeColor').css('visibility', 'hidden');
    }
  });



})
