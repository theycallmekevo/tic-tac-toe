// wait for the DOM to finish loading
$(document).ready(function() {

//Reloads page when user clicks on reset button
$('button').click(function() {
    location.reload();
});

//variables of user clicks on each box

var topLeft = $('#topLeft').click(function(){
  console.log("you won!");
  });


// var topLeft = $('#topLeft').click(function(){
//     $(this).css({'background-image': 'url(images/ex.jpg)',
//                  'background-position': 'center',
//                  'background-size': 'cover'});
//               });

var topMiddle = $('#topMiddle').click(function(){
    $(this).css('background-color', '#0099cc');
});

var topRight = $('#topRight').click(function(){
    $(this).css('background-color', '#ffdab9');
});

var middleLeft = $('#middleLeft').click(function(){
    $(this).css('background-color', '#6897bb');
});

var middleMiddle = $('#middleMiddle').click(function(){
    $(this).css('background-color', '#ffb6c1');
});

var middleRight = $('#middleRight').click(function(){
    $(this).css('background-color', '#e6e6fa');
});

var bottomLeft = $('#bottomLeft').click(function(){
    $(this).css('background-color', '#ffd700');
});

var bottomMiddle = $('#bottomMiddle').click(function(){
    $(this).css('background-color', '#00ff7f');
});

var bottomRight = $('#bottomRight').click(function(){
    $(this).css('background-color', '#990000');
});









});
