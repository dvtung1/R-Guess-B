import { Component, OnInit } from "@angular/core";
import { executeGame, getHighscore } from "../../../assets/js/script";
import { GameService } from "src/app/services/game.service";
import { AuthService } from "src/app/services/auth.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"]
})
export class GameComponent implements OnInit {
  response: any;
  isAuthenticated: boolean;
  private authListener: Subscription;
  constructor(
    private gameService: GameService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    executeGame();
    this.isAuthenticated = this.authService.getIsAuthenticated();
    this.authListener = this.authService
      .getAuthEmitter()
      .subscribe(isAuthenticated => {
        this.isAuthenticated = isAuthenticated;
      });
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
