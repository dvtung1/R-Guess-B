import { Component, OnInit } from "@angular/core";
import { GameService } from "src/app/services/game.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-manage",
  templateUrl: "./manage.component.html",
  styleUrls: ["./manage.component.css"]
})
export class ManageComponent implements OnInit {
  highscoreArray: any;
  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService
      .getHighscore()
      .pipe(
        map(response => {
          return {
            highscoreArray: response.highscoreArray.map(highscore => {
              return {
                score: highscore.score,
                created: new Date(highscore.created)
              };
            })
          };
        })
      )
      .subscribe(postResponse => {
        this.highscoreArray = postResponse.highscoreArray;
      });
  }
}
