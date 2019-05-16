import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Subject } from "rxjs";

const BACKEND_URL = environment.apiUrl + "/game";

@Injectable({
  providedIn: "root"
})
export class GameService {
  private topPlayersList: any[];
  private topPlayersEmitter = new Subject<any[]>();
  constructor(private http: HttpClient) {}

  saveHighscore(score: number) {
    return this.http.post<{ message: string }>(BACKEND_URL + "/score", {
      score
    });
  }
  getHighscore() {
    return this.http.get<any>(BACKEND_URL + "/score");
  }
  getSummary() {
    return this.http.get<any>(BACKEND_URL + "/summary");
  }

  getTopPlayers() {
    this.http.get<any>(BACKEND_URL + "/top").subscribe(
      response => {
        this.topPlayersList = response.topPlayers;
        this.topPlayersEmitter.next([...this.topPlayersList]);
      },
      err => {
        console.log(err.error.message);
      }
    );
  }

  updateTopPlayers(player) {
    //create a temp copy version of the main array
    let tempList = this.topPlayersList;
    tempList.push(player);
    //sort the list based on the score (ascending)
    tempList = tempList.sort((a, b) => {
      return b.score - a.score;
    });
    //only get top 3 players
    tempList = tempList.slice(0, 3);
    //assign the temp version back to main array
    this.topPlayersList = tempList;
    this.topPlayersEmitter.next([...this.topPlayersList]);
  }

  getTopPlayersEmitter() {
    return this.topPlayersEmitter.asObservable();
  }
}
