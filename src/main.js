import Phaser from "phaser";
import Game from "./scenes/game";
import GameOver from "./scenes/gameover";
import StartGame from "./scenes/startgame";
/*
This is the main configuration file for the game.
*/
const config = {
  width: 700,
  height: 400,
  scale: {
    mode: Phaser.Scale.FIT,
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

