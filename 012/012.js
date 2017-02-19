$(document).ready(function () {
  $('.smallPic').click(function () {
    $('.main').attr('src', $(this).attr('src').replace('smallPic', 'main'))
  })
})
