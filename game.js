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
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.stage.backgroundColor = 0x448844;
    game.load.spritesheet("cards", "cards.png", 167, 243);
  },
  create: function() {

  },

}