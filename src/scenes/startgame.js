export default class StartGame extends Phaser.Scene {
  constructor() {
    super({ key: "startgame" });
  }

  preload() {
    this.registry.set("score", "0");
    this.load.audio("coin", "assets/sounds/coin.mp3");
    this.load.audio("jump", "assets/sounds/jump.mp3");
    this.load.audio("dead", "assets/sounds/dead.mp3");
    this.load.audio("theme", "assets/sounds/theme.mp3");
    this.load.spritesheet("coin", "./assets/images/cookie4.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet('tomato', 'assets/images/tomatohead1.png', {
      frameWidth: 12,
      frameHeight: 12,
    });
    this.load.bitmapFont(
      "arcade",
      "assets/fonts/arcade.png",
      "assets/fonts/arcade.xml"
    );
    this.score = 0;
    this.load.image('cloudTexture', 'assets/images/cloud.png');
    this.load.image('playerTiko', 'assets/images/tiko.png');
    this.load.image('playerTikoTemp', 'assets/images/tikohappy.png');
    this.load.image('tikoOpen', 'assets/images/tikoopen.png');
  }

  create() {
    this.width = this.sys.game.config.width;
    this.height = this.sys.game.config.height;
    this.center_width = this.width / 2;
    this.center_height = this.height / 2;

    this.cameras.main.setBackgroundColor(0x87ceeb);

    this.add
      .bitmapText(
        this.center_width,
        this.center_height,
        "arcade",
        "TIKO",
        60
      )
      .setOrigin(0.5);
    const tikoPhoto = this.add.image(this.center_width - 50, 0, 'tikoOpen').setOrigin(0);
    tikoPhoto.setScale(0.2);
    this.tweens.add({
      targets: tikoPhoto,
      duration: 1500,
      angle: { from: 250, to: 0 },
      //repeat: -1,
    });
  
    this.add
      .bitmapText(
        this.center_width,
        250,
        "arcade",
        "Press SPACE or Click to start!",
        15
      )
      .setOrigin(0.5);
    this.input.keyboard.on("keydown-SPACE", this.startGame, this);
    this.input.on("pointerdown", (pointer) => this.startGame(), this);
  }

  showLine(text, y) {
    let line = this.introLayer.add(
      this.add
        .bitmapText(this.center_width, y, "pixelFont", text, 25)
        .setOrigin(0.5)
        .setAlpha(0)
    );
    this.tweens.add({
      targets: line,
      duration: 2000,
      alpha: 1,
    });
  }

  startGame() {
    this.scene.start("game");
  }
}
