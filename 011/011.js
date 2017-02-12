$(document).ready(function () {
  $('.btn').click(function () {
    $('.buttonHolder').hide();
    $('.spinner').show().delay(5000).queue(function () {
      $(this).hide();
      $('body').css('background-color', '#728F81');
      $('.message').show();
    })
  })
})
