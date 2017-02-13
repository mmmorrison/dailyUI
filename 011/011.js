$(document).ready(function () {
  var random = Math.floor(Math.random() * $('.message').length);

  $('.btn').click(function () {
    $('.buttonHolder').hide();
    $('.spinner').show().delay(5000).queue(function () {
      $(this).hide();
      $('.message').hide().eq(random).show();
    })
  })

  


});





// $('body').css('background-color', '#728F81');
