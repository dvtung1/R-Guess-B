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
    executeGame();
  }
}
