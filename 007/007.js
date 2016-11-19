$(document).ready(function(){
  // Click fonts button and shows font options
  $('.fontsButton').click(function(){
    if ($('.ChangeFont').css('visibility') == 'hidden'){
      $('.ChangeFont').css('visibility', 'visible');
    }else{
      $('.ChangeFont').css('visibility', 'hidden');
    }
  });

  // Click colors button and shows color options
  $('.colorsButton').click(function(){
    if ($('.ChangeColor').css('visibility') == 'hidden'){
      $('.ChangeColor').css('visibility', 'visible');
    }else{
      $('.ChangeColor').css('visibility', 'hidden');
    }
  });

  //Click only one font box & add class
  $('.fontBoxes').click(function(){
    if ($(this).is(':checked')){
      $('.fontBoxes').not($(this)).attr('checked', false);
      $('body').removeClass().addClass(this.name)
    }
  });

  //Click only one style box
  $('.schemeBoxes').click(function() {
    if ($(this).is(':checked')){
      $('.schemeBoxes').not($(this)).attr('checked', false);
    }
  });

  //Changes schemes
  $('.schemeBoxes').click(function(){
    if ($(this).is(':checked')){
      $('link[href]#changeScheme').attr('href', this.name + '.css')
    }
  })








})
