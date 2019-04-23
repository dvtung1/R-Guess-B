import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

const BACKEND_URL = environment.apiUrl + "/game";

@Injectable({
  providedIn: "root"
})
export class GameService {
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
}
