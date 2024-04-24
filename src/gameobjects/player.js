class Player extends Phaser.GameObjects.Sprite {
  originalScale = 0.08;

  constructor(scene, x, y, number) {
    const textureKey = 'playerTiko';

    super(scene, x, y, textureKey);
    this.setOrigin(0.5);
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.collideWorldBounds = true;
    this.setScale(this.originalScale);
    this.jumping = false;
    this.invincible = false;
    this.health = 10;
    this.body.mass = 10;
    this.body.setDragY = 10;

    this.setupTempAnimation()
  }

  setupTempAnimation() {
    // Define temporary animation frames
    const tempFrames = [
      { key: 'playerTikoTemp', frame: 0 }, // Temporary texture frame
    ];

    // Create the temporary animation
    this.scene.anims.create({
      key: 'tempAnimation',
      frames: tempFrames,
      frameRate: 1, // 1 frame per second
      repeat: 0, // Play only once
    });
  }

  switchTextureTemporarily() {
    // Switch texture to temporary texture
    this.setTexture('playerTikoTemp');
    this.setScale(0.06)

    // Play the temporary animation
    this.play('tempAnimation');

    // After 1 second, revert to the original texture
    const delayTime = 700;
    const originalTexture = 'playerTiko';
    this.scene.time.delayedCall(delayTime, () => {
      if (this.active && this.texture.key === 'playerTikoTemp') {
        this.setTexture(originalTexture); // Revert to the original texture
        this.setScale(this.originalScale)
      }
    });
  }
}

export default Player;
