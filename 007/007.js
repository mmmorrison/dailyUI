$(document).ready(function() {
  // Click fonts button and shows font options
  $('.fonts').click(function () {
    if ($('.ChangeFont').css('visibility') == 'hidden'){
      $('.ChangeFont').css('visibility', 'visible');
    }else{
      $('.ChangeFont').css('visibility', 'hidden');
    }
  });

  // Click colors button and shows color options
  $('.colors').click(function () {
    if ($('.ChangeColor').css('visibility') == 'hidden'){
      $('.ChangeColor').css('visibility', 'visible');
    }else{
      $('.ChangeColor').css('visibility', 'hidden');
    }
  });



})
x
