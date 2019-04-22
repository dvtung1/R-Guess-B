import { Component, OnInit } from "@angular/core";
import { executeGame, getHighscore } from "../../../assets/js/script";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"]
})
export class GameComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    executeGame();
  }
  onClick() {
    var highscore = getHighscore();
    console.log(highscore);
  }
}
