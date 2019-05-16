import { Component, OnInit } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { Socket } from "ngx-socket-io";
import { GameService } from "./services/game.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private socket: Socket,
    private gameService: GameService
  ) {}
  ngOnInit(): void {
    this.authService.autoLoginAuth();
    this.socket.on("score", scoreObj => {
      this.gameService.updateTopPlayers(scoreObj);
    });
  }
}
