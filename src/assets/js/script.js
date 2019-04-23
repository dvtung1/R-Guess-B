let highscore = 0;
export function executeGame() {
  let chanceLeft = 3;
  let choosenRGB;
  const numBlocks = 6;
  let canReset = true;

  //DOM declaration
  var rgbBoard = document.querySelector("#rgbBoard");
  var blocks = document.querySelectorAll(".block");
  var head = document.querySelector("#head");
  var gameStatus = document.querySelector("#control p");
  var resetButton = document.querySelector("#resetButton");
  var highscoreStatus = document.querySelector("#highscore");
  var chanceStatus = document.querySelector("#chance");

  function generateColor() {
    var redColor = Math.floor(Math.random() * 256);
    var greenColor = Math.floor(Math.random() * 256);
    var blueColor = Math.floor(Math.random() * 256);
    var arrayColor = [redColor, greenColor, blueColor];
    return arrayColor;
  }

  function getRGBColor() {
    var arrayColor = generateColor();
    var rgbCodeStr =
      "rgb(" +
      arrayColor[0] +
      ", " +
      arrayColor[1] +
      ", " +
      arrayColor[2] +
      ")";
    return rgbCodeStr;
  }

  function generateOrder(size) {
    return Math.floor(Math.random() * size);
  }

  function guessCorrect() {
    head.style.background = choosenRGB;
    gameStatus.textContent = "Congratulation!";
    canReset = true;
    //make all the blocks unclickable
    this.removeEventListener("click", guessCorrect);
    blocks.forEach(function(block) {
      //set all blocks = correct color
      block.style.background = choosenRGB;
      block.removeEventListener("click", guessWrong);
    });
    highscore++;
    setHighscore();
  }
  function setHighscore() {
    highscoreStatus.textContent = highscore;
  }
  function setChance() {
    chanceStatus.textContent = chanceLeft;
  }

  function guessWrong() {
    this.style.background = "white";
    gameStatus.textContent = "Try Again!";
    chanceLeft--;
    setChance();
    if (chanceLeft <= 0) {
      chanceLeft = 3;
      highscore = 0;
      setHighscore();
      setChance();
      alert("You lose");
      canReset = true;
      resetGame();
    }
    //this.classList.add = "d-none";
  }

  function resetGame() {
    if (canReset == false) {
      alert("Please finish this level first");
      return;
    }
    //renew chances every time it wins
    chanceLeft = 3;
    setChance();
    canReset = false;
    blocks.forEach(function(block) {
      block.removeEventListener("click", guessCorrect);
      block.removeEventListener("click", guessWrong);
    });

    gameStatus.textContent = "";
    head.style.background = "blue";

    //generate new correct block order
    let blockCorrectOrder = generateOrder(numBlocks);
    //generate new correct block color using old var
    choosenRGB = getRGBColor();
    //set new context
    rgbBoard.textContent = choosenRGB;

    assignRGB(blockCorrectOrder);
  }

  function assignRGB(blockCorrectOrder) {
    for (var i = 0; i < numBlocks; i++) {
      var randomRGB = getRGBColor();
      if (i == blockCorrectOrder) {
        blocks[i].style.background = choosenRGB;
        blocks[i].addEventListener("click", guessCorrect);
        continue;
      }
      blocks[i].style.background = randomRGB;
      blocks[i].addEventListener("click", guessWrong);
    }
  }

  resetGame();

  resetButton.addEventListener("click", resetGame);
}
export function getHighscore() {
  return Number(highscore);
}
