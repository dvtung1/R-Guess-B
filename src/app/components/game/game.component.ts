import { Component, OnInit } from "@angular/core";
import { executeGame } from "../../../assets/js/script";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"]
})
export class GameComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    //executeGame();
    let choosenRGB;
    const numBlocks = 6;
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
      (<any>head).style.background = choosenRGB;
      gameStatus.textContent = "Congratulation!";

      //make all the blocks unclickable
      this.removeEventListener("click", guessCorrect);
      blocks.forEach(function(block) {
        //set all blocks = correct color
        (<any>block).style.background = choosenRGB;
        block.removeEventListener("click", guessWrong);
      });
    }

    function guessWrong() {
      this.style.background = "white";
      gameStatus.textContent = "Try Again!";
      //this.classList.add = "d-none";
    }

    function resetGame() {
      blocks.forEach(function(block) {
        block.removeEventListener("click", guessCorrect);
        block.removeEventListener("click", guessWrong);
      });

      gameStatus.textContent = "";
      (<any>head).style.background = "blue";

      //generate new correct block order
      let blockCorrectOrder = generateOrder(numBlocks);
      //generate new correct block color using old var
      choosenRGB = getRGBColor();
      //set new context
      rgbBoard.textContent = choosenRGB;

      assignRGB(blockCorrectOrder);
    }

    //DOM declaration
    var rgbBoard = document.querySelector("#rgbBoard");
    var blocks = document.querySelectorAll(".block");
    var head = document.querySelector("#head");
    var gameStatus = document.querySelector("#control p");
    var resetButton = document.querySelector("#resetButton");

    function assignRGB(blockCorrectOrder) {
      for (var i = 0; i < numBlocks; i++) {
        var randomRGB = getRGBColor();
        if (i == blockCorrectOrder) {
          (<any>blocks[i]).style.background = choosenRGB;
          blocks[i].addEventListener("click", guessCorrect);
          continue;
        }
        (<any>blocks[i]).style.background = randomRGB;
        blocks[i].addEventListener("click", guessWrong);
      }
    }
    resetGame();

    resetButton.addEventListener("click", resetGame);
  }
  onClick() {}
}
