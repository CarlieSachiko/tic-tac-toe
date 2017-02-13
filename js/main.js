//Notes
// 1. (Start the Game) function initialize
  //   1a. set board =['','','','','','','','','']
  //   1b. pick random player
  //   1c. tell user who starts
  //   1d. set gameOver = false
  //   1e. reset win and play again messages
  //   1f. clear cell textContent

// 2. On click cell event listener
  //   if !gamOver && if cell text content=''
  //     2a. set cell textContent to player
  //     2b. set player to board array
  //     2c. check for winner
  //       -if player index is 0,1,2 or 3,4,5 or 6,7,8 or 0,3,6, or 1,4,7 or 2,5,8 or 0,4,8 or 2,4,6
  //         -set winning message
  //         -show play again message
  //         -gameOver = true
  //     2d. check for cats game
  //       -if !winner
  //         -if # of player on board >=5
  //           -set cats game message
  //           -gameOver = true
  //           -show play again message
  //     2e. switch player

// 3. On click play again
  //   3a. run initialize




/*--- variables ---*/
var player, board, gameOver, catsGame;
var restart=document.getElementById('restart');
var winner=document.getElementById('winner')
var cells = document.querySelectorAll('tr .cell');

/*--- event listners ---*/

document.getElementById('board')
.addEventListener('click', handleClick);

document.getElementById('restart')
.addEventListener('click', initialize);

// document.getElementById('board')
//   .addEventListener('mouseover', handleHoverIn);

// document.getElementById('body')
// .addEventListener('load', initialize);



/*--- functions ---*/

// function handleHoverIn(evt){
//   evt.target.textContent=player;
//   if (evt.target.clicked === false) {
//     function hoverOut(evt){
//       evt.target.textContent='';
//     }
//     evt.target.mouseout(hoverOut);
//   } else return;

// }

function initialize(){
  board=[null,null,null,null,null,null,null,null,null];
  player = Math.round(Math.random())?'X':'O';
  setMessage(player + "'s turn");
  gameOver=false;
  winner.innerHTML='';
  restart.innerHTML='';
  //renderBoard();
  resetDisplay();
}

function setMessage(msg){
  document.getElementById('message').innerText = msg;
}

initialize();

function resetDisplay(){
  for(var i=0; i<=board.length; i++){
     cells[i].textContent='';
     cells[i].style.color="white";
  }
}

function changePlayer(){
  player = (player==='X') ? 'O' : 'X';
  // if (player==='X'){
  //   player='O';
  // } else {
  //   player = 'X';
  // }
  setMessage(player + "'s " + "turn");
}

function setWinner(){
  winner.textContent = player + " wins!";
  restart.textContent = "Play Again?";
  for(var i=0; i<=board.length; i++) {
    if (board[i]===player) {
      cells[i].style.color="#FEDE4E";
    }
  }
  gameOver=true;
}

function winnerStatus(){
 if (board[0]===player && board[1]===player && board[2]===player) {
    setWinner();
  };
 if (board[3]===player && board[4]===player && board[5]===player) {
    setWinner();
  };
 if (board[6]===player && board[7]===player && board[8]===player) {
    setWinner();
  };
 if (board[0]===player && board[3]===player && board[6]===player) {
    setWinner();
  };
 if (board[1]===player && board[4]===player && board[7]===player) {
    setWinner();
  };
 if (board[2]===player && board[5]===player && board[8]===player) {
    setWinner();
  };

 if (board[0]===player && board[4]===player && board[8]===player) {
    setWinner();
  };
 if (board[2]===player && board[4]===player && board[6]===player) {
    setWinner();
  };
}


function checkCats(p) {
  if (gameOver) return;
    function catsCondition(p){
      return p===player;
    }
    if (board.filter(catsCondition).length>=5){
      winner.textContent="Cat's Game"
      restart.textContent = "Play Again?";
      gameOver=true;
    }
}

function renderBoard(x){
  board[x.target.id] = player;
  //board.splice(x.target.id, 1, player);
  board.forEach(function(cell,idx){
    document.getElementById(idx).textContent=cell;
  })
}cell


function handleClick(evt){
  if (gameOver) return;
  var clickedEl=evt.target;
  if (clickedEl.textContent===''){
    //clickedEl.textContent = player;
    renderBoard(evt);
    winnerStatus();
    checkCats(player);
    if (!gameOver){
      changePlayer();
    }
  }
  console.log(board);
};













