let game = new Game();

const displayWinner = function(player) {
  let display = document.getElementById("display");
  let name = player.getName();
  display.innerText =`congratulation ${name} has Won`;
}

const displayDraw = function() {
  let display = document.getElementById("display");
  display.innerText =  ` Match Draw `;
}

const updateGame = function(event) {
  let boxId = getMarkedBoxId(event);
  if(game.hasWon()) {
    game.isGameinPlay=false;
    displayWinner(game.getWinner());
  }
  if(game.isGameinPlay) {
    continueGame(game,boxId);
  }
  if(game.isDrawn()) {
    game.isGameinPlay=false;
    displayDraw();
  }
};

const continueGame = function(game,boxId) {
  let box = document.getElementById(boxId);
  let player = game.getCurrPlayer();
  let name = player.getName();
  let symbol = player.getSymbol();
  if(!game.isInvalidMove(+boxId)) {
    game.storeWinner(player);
    drawSymbol(box,symbol);
    player.storeMove(+boxId);
    game.storeMove(+boxId);
    game.getNextPlayer();
    displayTurn();
  }
};

const drawSymbol = function(box,symbol) {
  box.innerText = symbol;
};

const displayTurn = function() {
  let display = document.getElementById("display");//
  let name = game.getCurrPlayer().getName();
  display.innerText = ` ${name} 's turn `;
};


const getMarkedBoxId = function(event) {
  return event.target.id;
};

const loadGame = function() {
  let table = document.getElementById("gameBoard");
  table.addEventListener("click",updateGame);
  displayTurn();
};

window.onload = loadGame;
