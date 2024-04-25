import Phaser from "phaser";
import Game from "./scenes/game";
import GameOver from "./scenes/gameover";
import StartGame from "./scenes/startgame";
/*
This is the main configuration file for the game.
*/
const config = {
  width: 400,
  height: 650,
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  autoRound: false,
  parent: "game-container",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 350 },
      debug: false,
    },
  },
  scene: [StartGame ,Game, GameOver],
};

const game = new Phaser.Game(config);

