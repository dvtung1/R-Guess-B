import { Component, OnInit } from "@angular/core";
import { executeGame, getHighscore } from "../../../assets/js/script";
import { GameService } from "src/app/services/game.service";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"]
})
export class GameComponent implements OnInit {
  response: any;
  constructor(private gameService: GameService) {}

  ngOnInit() {
    executeGame();
  }
  onClick() {
    let highscore = getHighscore();
    this.gameService.saveHighscore(highscore).subscribe(
      response => {
        console.log(response.message);
      },
      err => {
        console.log(err.error.message);
      }
    );
  }
}
