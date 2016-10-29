// wait for the DOM to finish loading
$(document).ready(function() {

//Reloads page when user clicks on reset button
$('button').click(function() {
    location.reload();
});

//game counter
var gameCounter = 0;

//setting all game boxes to variable
var box1 = $('#topLeft').click(function(){
  console.log('box 1');
});
var box2 = $('#topMiddle').click(function(){
  console.log('box 2');
});
var box3 = $('#topRight').click(function(){
  console.log('box 3');
});
var box4 = $('#middleLeft').click(function(){
  console.log('box 4');
});
var box5 = $('#middleMiddle').click(function(){
  console.log('box 5');
});
var box6 = $('#middleRight').click(function(){
  console.log('box 6');
});
var box7 = $('#bottomLeft').click(function(){
  console.log('box 7');
});
var box8 = $('#bottomMiddle').click(function(){
  console.log('box 8');
});
var box9 = $('#bottomRight').click(function(){
  console.log('box 9');
});









//
// //variables of user clicks on each box
// var topLeft = $('#topLeft').click(function(){
//     $(this).css({'background-image': 'url(images/ex.jpg)',
//                  'background-position': 'center',
//                  'background-size': 'cover'});
//               });
//
// var topMiddle = $('#topMiddle').click(function(){
//     $(this).css('background-color', '#0099cc');
// });
//
// var topRight = $('#topRight').click(function(){
//     $(this).css('background-color', '#ffdab9');
// });
//
// var middleLeft = $('#middleLeft').click(function(){
//     $(this).css('background-color', '#6897bb');
// });
//
// var middleMiddle = $('#middleMiddle').click(function(){
//     $(this).css('background-color', '#ffb6c1');
// });
//
// var middleRight = $('#middleRight').click(function(){
//     $(this).css('background-color', '#e6e6fa');
// });
//
// var bottomLeft = $('#bottomLeft').click(function(){
//     $(this).css('background-color', '#ffd700');
// });
//
// var bottomMiddle = $('#bottomMiddle').click(function(){
//     $(this).css('background-color', '#00ff7f');
// });
//
// var bottomRight = $('#bottomRight').click(function(){
//     $(this).css('background-color', '#990000');
// });









});
