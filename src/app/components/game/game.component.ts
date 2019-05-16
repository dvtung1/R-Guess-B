import { Component, OnInit, OnDestroy } from "@angular/core";
import { executeGame, getHighscore } from "../../../assets/js/script";
import { GameService } from "src/app/services/game.service";
import { AuthService } from "src/app/services/auth.service";
import { Subscription } from "rxjs";
import { Socket } from "ngx-socket-io";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"]
})
export class GameComponent implements OnInit, OnDestroy {
  response: any;
  isAuthenticated: boolean;
  topPlayersList: any[];
  private authListener: Subscription;
  private topPlayersListener: Subscription;
  constructor(
    private gameService: GameService,
    private authService: AuthService,
    private socket: Socket
  ) {}

  ngOnDestroy(): void {
    this.authListener.unsubscribe();
    this.topPlayersListener.unsubscribe();
  }
  ngOnInit() {
    executeGame();
    this.isAuthenticated = this.authService.getIsAuthenticated();
    this.authListener = this.authService
      .getAuthEmitter()
      .subscribe(isAuthenticated => {
        this.isAuthenticated = isAuthenticated;
      });
    this.topPlayersListener = this.gameService
      .getTopPlayersEmitter()
      .subscribe(topPlayersList => {
        this.topPlayersList = topPlayersList;
      });
    this.gameService.getTopPlayers();
  }
  onClick() {
    let highscore = getHighscore();
    this.gameService.saveHighscore(highscore).subscribe(
      response => {
        //emit the current score of the current player
        this.socket.emit("score", {
          score: highscore,
          email: this.authService.getUserEmail()
        });
        console.log("Saved highscore");
      },
      err => {
        console.log(err.error.message);
      }
    );
  }
}
