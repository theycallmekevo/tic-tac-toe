// wait for the DOM to finish loading
$(document).ready(function() {
//Reloads page when user clicks on reset button
$('button').click(function() {
    location.reload();
});

//pair programming team: Kyle Russell & Kevin Tran
//game counter (global variable: will update after each user click)
var gameCounter = 0;
//created function to start game when user clicks
$('.box').click(function(){
//creating game win conditions
//ways for player x to win
    var xWin1 = ($('#topLeft').text() === 'X' && $('#topMiddle').text() === 'X' && $('#topRight').text() === 'X');
    var xWin2 = ($('#middleLeft').text() === 'X' && $('#middleMiddle').text() === 'X' && $('#middleRight').text() === 'X');
    var xWin3 = ($('#bottomLeft').text() === 'X' && $('#bottomMiddle').text() === 'X' && $('#bottomRight').text() === 'X');
    var xWin4 = ($('#topLeft').text() === 'X' && $('#middleLeft').text() === 'X' && $('#bottomLeft').text() === 'X');
    var xWin5 = ($('#topMiddle').text() === 'X' && $('#middleMiddle').text() === 'X' && $('#bottomMiddle').text() === 'X');
    var xWin6 = ($('#topRight').text() === 'X' && $('#middleRight').text() === 'X' && $('#bottomRight').text() === 'X');
    var xWin7 = ($('#topLeft').text() === 'X' && $('#middleMiddle').text() === 'X' && $('#bottomRight').text() === 'X');
    var xWin8 = ($('#topRight').text() === 'X' && $('#middleMiddle').text() === 'X' && $('#bottomLeft').text() === 'X');
//ways for player O to win
    var oWin1 = ($('#topLeft').text() === 'O' && $('#topMiddle').text() === 'O' && $('#topRight').text() === 'O');
    var oWin2 = ($('#middleLeft').text() === 'O' && $('#middleMiddle').text() === 'O' && $('#middleRight').text() === 'O');
    var oWin3 = ($('#bottomLeft').text() === 'O' && $('#bottomMiddle').text() === 'O' && $('#bottomRight').text() === 'O');
    var oWin4 = ($('#topLeft').text() === 'O' && $('#middleLeft').text() === 'O' && $('#bottomLeft').text() === 'O');
    var oWin5 = ($('#topMiddle').text() === 'O' && $('#middleMiddle').text() === 'O' && $('#bottomMiddle').text() === 'O');
    var oWin6 = ($('#topRight').text() === 'O' && $('#middleRight').text() === 'O' && $('#bottomRight').text() === 'O');
    var oWin7 = ($('#topLeft').text() === 'O' && $('#middleMiddle').text() === 'O' && $('#bottomRight').text() === 'O');
    var oWin8 = ($('#topRight').text() === 'O' && $('#middleMiddle').text() === 'O' && $('#bottomLeft').text() === 'O');
//adding all ways to win into one variable each
    var xWins = (xWin1 || xWin2 || xWin3 || xWin4 || xWin5 || xWin6 || xWin7 || xWin8);
    var oWins = (oWin1 || oWin2 || oWin3 || oWin4 || oWin5 || oWin6 || oWin7 || oWin8);
//game play switching from X to O on even and odd values of game counter. Game counter set to 0, on even = X, on odd = O. Updates gamecounter after each user click.
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
//checks if condition is true and alerts user of Winner!
    if(xWins){
      console.log('X wins!');
      return;
    } else if (oWins) {
      console.log('O wins!');
      return;
    } else {
  }
  });






















//setting all game boxes to variable
// var box1 = $('#topLeft').click(function(){
  // console.log('box 1');
  // $(this).css('background-color', 'red');
  // $(this).html('X');
  // $(this).text('O');
// });
// var box2 = $('#topMiddle').click(function(){
//   console.log('box 2');
// });
// var box3 = $('#topRight').click(function(){
//   console.log('box 3');
// });
// var box4 = $('#middleLeft').click(function(){
//   console.log('box 4');
// });
// var box5 = $('#middleMiddle').click(function(){
//   console.log('box 5');
// });
// var box6 = $('#middleRight').click(function(){
//   console.log('box 6');
// });
// var box7 = $('#bottomLeft').click(function(){
//   console.log('box 7');
// });
// var box8 = $('#bottomMiddle').click(function(){
//   console.log('box 8');
// });
// var box9 = $('#bottomRight').click(function(){
//   console.log('box 9');
// });


});
