let Game = function() {
  this.players = [];
  this.player1 = new Player("Player 1", "X");
  this.plater2 = new Player("Player 2", "O");
  this.players.push(this.player1, this.plater2);
  this.playerIndex = 0;
  this.totalMoves = [];
  this.isGameinPlay = true;
  this.winner;
};

Game.prototype.isInvalidMove = function(move) {
  return this.totalMoves.includes(move);
};

Game.prototype.storeMove = function(move) {
  this.totalMoves.push(move);
};

Game.prototype.getCurrPlayer = function() {
  return this.players[this.playerIndex];
};

Game.prototype.getNextPlayer = function() {
  this.playerIndex = 1 - this.playerIndex;
};

Game.prototype.getWinner = function() {
  return this.winner;
}

Game.prototype.storeWinner = function(winner) {
  this.winner = winner;
}

Game.prototype.isDrawn = function() {
  return this.totalMoves.length == 9;
};

Game.prototype.hasWon = function() {
  let winSets = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
  ];
  let player = this.getCurrPlayer();
  let moves = player.getPlayerMoves();
  return winSets.some(function(winset) {
    return isSubset(moves,winset);
  });
};




const isSubset=function(list1,list2){

  return list2.every(function(num){
    console.log(num);
    return list1.includes(num);
  });
}
