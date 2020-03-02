let Player = function(name, symbol) {
  this.name = name;
  this.symbol = symbol;
  this.playerMoves = [];
};


Player.prototype.getPlayerMoves = function() {
  return this.playerMoves
};


Player.prototype.storeMove = function(move) {
  this.playerMoves.push(move);
};

Player.prototype.getSymbol = function(move) {
  return this.symbol;
};

Player.prototype.getName = function() {
  return this.name;
}

// module.exports = Player;
