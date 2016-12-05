/*--- variables ---*/
//var winConditions=[[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
var player;
var board;
var gameOver;
var restart=document.getElementById('restart');
var winner=document.getElementById('winner')
var catsGame;

/*--- event listners ---*/

// document.getElementById('board')
//   .addEventListener('mouseover', handleHoverIn);

// document.getElementById('body')
// .addEventListener('load', initialize);

document.getElementById('board')
.addEventListener('click', handleClick);

document.getElementById('restart')
.addEventListener('click', initialize);


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
  board=['','','','','','','','',''];
  player = Math.round(Math.random())?'X':'O';
  setMessage(player + "'s " + "turn");
  updateDisplay();
  gameOver=false;
}

initialize();

function updateDisplay(){
  var cells =document.querySelectorAll('.cell');
   for(var i=0; i<=board.length; i++){
    cells[i].textContent='';
  }
    winner.innerHTML='';
  restart.innerHTML='';
}

function setMessage(msg){
  document.getElementById('message').innerText = msg;
}

function reset (){
  // winner.innerHTML='';
  // restart.innerHTML='';
  location.reload();
  //initialize();
}

function changePlayer(){
  if (player==='X'){
    player='O';
  } else {
    player = 'X';
  }
  setMessage(player + "'s " + "turn");
}

function setWinner(){
  winner.textContent = player + " wins!";
  restart.textContent = "Play Again?";
  for(var i=0; i<=board.length; i++) {
    if (board[i]===player) {
      document.querySelectorAll('.cell')[i].style.color="#FEDE4E";
    }
  }
}


function winnerStatus(){
 if (board[0]===player && board[1]===player && board[2]===player) {
    setWinner(player);
    gameOver=true;
  };
 if (board[3]===player && board[4]===player && board[5]===player) {
    setWinner(player);
    gameOver=true;
  };
 if (board[6]===player && board[7]===player && board[8]===player) {
    setWinner(player);
    gameOver=true;
  };

 if (board[0]===player && board[3]===player && board[6]===player) {
    setWinner(player);
    gameOver=true;
  };
 if (board[1]===player && board[4]===player && board[7]===player) {
    setWinner(player);
    gameOver=true;
  };
 if (board[2]===player && board[5]===player && board[8]===player) {
    setWinner(player);
    gameOver=true;
  };

 if (board[0]===player && board[4]===player && board[8]===player) {
    setWinner(player);
    gameOver=true;
  };
 if (board[2]===player && board[4]===player && board[6]===player) {
    setWinner(player);
    gameOver=true;
  };
}

function checkCats(p) {
  //winnerStatus();
  //if(!gameover){
    function catsCondition(p){
      return p===player;
    }
    if (board.filter(catsCondition).length>=5){ //this won't work if someone wins with 5 marks on the board
      winner.textContent="Cat's Game"
      restart.textContent = "Play Again?";
    }
  //}
}

function renderBoard(x){
  board.splice(x.target.id, 1, player);
}

function handleClick(evt){
  if (gameOver) return;
  var clickedEl=evt.target;
  if(clickedEl.textContent===''){
    clickedEl.textContent = player;
    renderBoard(evt);

    winnerStatus(player);

    checkCats(player);
    if (!gameOver){
      changePlayer();
    }
  }
}













