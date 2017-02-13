$(document).ready(function () {
  // var color;
  var random = Math.floor(Math.random() * $('.message').length);

  $('.btn').click(function () {
    $('.buttonHolder').hide();
    $('.spinner').show().delay(5000).queue(function () {
      $(this).hide();
      $('.message').hide().eq(random).show();
      if ($('.message').hasClass('success')) {
        $("body").css("background", '#728F81');
      } else if ($(this).hasClass('fail')){
        $("body").css("background", 'red');
      }
    })
  })
})
