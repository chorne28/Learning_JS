/* Imagine the game is played on 10 x 10 grid, where
the upper left hand corner is position (0,0) and the
bottom right is position (9,9). The player Starts at 0,0.
moveRight() would move the player to (1,0). From
the initial starting point `moveDown()) would move
the player to (0,1). */


var Player = function (name) {
  //Properties
  this.name = name;
  this.livesLeft = 3;
  this.score = 0;
  this.speed = 0;
  this.gridLocationX = 0;
  this.gridLocationY = 0;

  //Methods

  /*die*/ Player.prototype.die = function die() {
    while (this.livesLeft < 0) {
      this.livesLeft += 1; /*lives left should never be a negative number*/
    }
    if (this.livesLeft == 0) {
      console.log("Gameover");
    /*Here i suppose i have to stop somehow the program from beeing executed, but i have honestly no idea, i tried different methods, but nothing worked as intended , if you guys can guide me would be great*/
    } else if((this.livesLeft == 2 || this.livesLeft == 1) && (this.gridLocationX == 0 && this.gridLocationY == 0)){
        console.log("Try again"); /**When one attempt failed and still have lives left*/
    }
  };

  /*score*/ Player.prototype.showScore = function showScore() {
    while (this.score < 0) {
      this.score = 0; /*to make sure my score will never be a negative number*/
    }
    if (this.livesLeft == 0) {
      console.log("Total Score: " + this.score);/*When all lives lost, a total score of all 3 rounds will be displayed*/
    }
  };

  /*speed*/Player.prototype.theSpeed = function theSpeed() {
      if(this.gridLocationX > 0 || this.gridLocationY > 0){
          this.speed = 1; /*is moving once at a time*/
      }else if(this.gridLocationX == 0 && this.gridLocationY == 0){
          this.speed = 0; /*The Player is on the initial position, not moving*/
      }
  }

  /*moveUp*/ Player.prototype.moveUp = function moveUp() {
    if (this.gridLocationY > 0) {
      this.gridLocationY -= 1;
      this.score += 100; /*each succesful move will be awarded with 100 points*/
    } else {
      this.livesLeft -= 1;
      this.gridLocationX = 0; /*Everytime a live is lost, the player is moved to initial position*/
      this.gridLocationY = 0;
      if (this.score > 0) {
        this.score -= 200;/*Each failed attempt takes 200 points*/
      }
    }
  };

  /*moveDown*/ Player.prototype.moveDown = function moveDown() {
    if (this.gridLocationY < 9) {
      this.gridLocationY += 1;
      this.score += 100;/*each succesful move will be awarded with 100 points*/
    } else {
      this.livesLeft -= 1;
      this.gridLocationX = 0;  /*Everytime a live is lost, the player is moved to initial position*/
      this.gridLocationY = 0;
      if (this.score > 0) {
        this.score -= 200;/*Each failed attempt takes 200 points*/
      }
    }
  };

  /*moveLeft*/ Player.prototype.moveLeft = function moveLeft() {
    if (this.gridLocationX > 0) {
      this.gridLocationX -= 1;
      this.score += 100;/*each succesful move will be awarded with 100 points*/
    } else {
      this.livesLeft -= 1;
      this.gridLocationX = 0;  /*Everytime a live is lost, the player is moved to initial position*/
      this.gridLocationY = 0;
      if (this.score > 0) {
        this.score -= 200;/*Each failed attempt takes 200 points*/
      }
    }
  };

  /*moveRight*/ Player.prototype.moveRight = function moveRight() {
    if (this.gridLocationX < 9) {
      this.gridLocationX += 1;
      this.score += 100;/*each succesful move will be awarded with 100 points*/
    } else {
      this.livesLeft -= 1;
      this.gridLocationX = 0;  /*Everytime a live is lost, the player is moved to initial position*/
      this.gridLocationY = 0;
      if (this.score > 0) {
        this.score -= 200;/*Each failed attempt takes 200 points*/
      }
    }
  };
};
