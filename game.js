const { Phaser } = require("./phaser.min");

var game;
var gameOptions = {
  flipSpeed: 200,
  flipZoom: 1.2
}
window.onload = function() {
  game = new Phaser.Game(500, 500);
  game.state.add("PlayGame", playGame);
  game.state.start("PlayGame");
}
var playGame = function (game){}

playGame.prototype = {
  preload: function() {

  },
  create: function() {

  },

}