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
var playGame = function(game){}

playGame.prototype = {
  preload: function(){
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.stage.backgroundColor = 0x448844;
    game.load.spritesheet("cards", "cards.png", 167, 243);
  },
  create: function(){
    this.card =  game.add.sprite(game.width / 2, game.height / 2, "cards", 0);
    this.card.anchor.set(0.5);
    this.card.isFlipping = false;
    game.input.onDown.add(function(){
      if(!this.card.isFlipping){
        this.card.isFlipping = true;
        this.flipTween.start();
      }
    }, this);

    this.flipTween = game.add.tween(this.card.scale).to({
      x: 0,
      y: gameOptions.flipZoom
    }, gameOptions.flipSpeed / 2, Phaser.Easing.Linear.None);

    this.flipTween.onComplete.add(function(){
      this.card.frame = 1 - this.card.frame;
      this.backFlipTween.start();
    }, this);

    this.backFlipTween = game.add.tween(this.card.scale).to({
      x: 1,
      y: 1
    }, gameOptions.flipSpeed / 2, Phaser.Easing.Linear.None);

    this.backFlipTween.onComplete.add(function(){
      this.card.isFlipping = false;
    }, this);
  }
}