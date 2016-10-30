// wait for the DOM to finish loading
$(document).ready(function() {

//Reloads page when user clicks on reset button
$('button').click(function() {
    location.reload();
});

//pair programming team: Kyle Russell & Kevin Tran
//game counter
var gameCounter = 0;

//created function when user clicks
    $('.box').click(function(){
    if ($(this).html() === '') {
    for (var i = 0; i < 1; i++) {
      if (gameCounter % 2 === 0) {
        $(this).html('X');
        gameCounter++;
      } else {
        $(this).html('O');
        gameCounter++;
        }
      }
    }
  });

//creating win conditions
var win1 = [$('#topLeft').text(), $('#topMiddle').text(), $('#topRight').text()];
var win2 = [$('#middleLeft').text(), $('#middleMiddle').text(), $('#middleRight').text()];
var win3 = [$('#bottomLeft').text(), $('#bottomMiddle').text(), $('#bottomRight').text()];
var win4 = [$('#topLeft').text(), $('#middleLeft').text(), $('#bottomLeft').text()];
var win5 = [$('#topMiddle').text(), $('#middleMiddle').text(), $('#bottomMiddle').text()];
var win6 = [$('#topRight').text(), $('#middleMiddle').text(), $('#bottomRight').text()];
var win7 = [$('#topLeft').text(), $('#middleMiddle').text(), $('#bottomRight').text()];

var waysToWin = [win1, win2, win3, win4, win5, win6, win7];

var win1 = ($('#topLeft').text() === 'X' && $('#topMiddle').text() === 'X' && $('#topRight').text() === 'X');
var win2 = [$('#middleLeft').text(), $('#middleMiddle').text(), $('#middleRight').text()];
var win3 = [$('#bottomLeft').text(), $('#bottomMiddle').text(), $('#bottomRight').text()];
var win4 = [$('#topLeft').text(), $('#middleLeft').text(), $('#bottomLeft').text()];
var win5 = [$('#topMiddle').text(), $('#middleMiddle').text(), $('#bottomMiddle').text()];
var win6 = [$('#topRight').text(), $('#middleMiddle').text(), $('#bottomRight').text()];
var win7 = [$('#topLeft').text(), $('#middleMiddle').text(), $('#bottomRight').text()];

// var full = [win1, win2, win3, win4, win5, win6, win7];

if (win1) {
  alert('yea!');
} if($('#topLeft').text() === 'X' && $('#middleMiddle').text() === 'X' && $('#bottomRight').text() === 'X'){
  alert('also yea!');
}

















//setting all game boxes to variable
// var box1 = $('#topLeft').click(function(){
  // console.log('box 1');
  // $(this).css('background-color', 'red');
  // $(this).html('X');
  // $(this).text('O');
// });
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


});
