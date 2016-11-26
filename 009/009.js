var albumInfo = [{
 cover: 'albums/oasis_beherenow.jpg',
 artist: 'Oasis',
 album: 'Be Here Now'
}, {
 cover: 'albums/sade_thebestofsade.jpg',
 artist: 'Sade',
 album: 'The Best of Sade'
}, {
 cover: 'albums/thebeatles_meetthebeatles.jpg',
 artist: 'The Beatles',
 album: 'Meet The Beatles'
}, {
 cover: 'albums/thedoors_anamericanprayer.jpg',
 artist: 'The Doors',
 albums: 'An American Prayer'
}]


$(document).ready(function() {
  $('img#cover').attr('src', albumInfo[0].cover);
  $('#artist').append('Artist: ' + albumInfo[0].artist);
  $('#album').append('Album: ' + albumInfo[0].album);

  $('#next').click(function() {
    $('img#cover').attr('src', albumInfo[1].cover);
    $('#artist').html("").append('Artist: ' + albumInfo[1].artist);
    $('#album').html("").append('Album: ' + albumInfo[1].album);
  })


});
