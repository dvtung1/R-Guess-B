import { Component, OnInit } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { Socket } from "ngx-socket-io";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private socket: Socket) {}
  ngOnInit(): void {
    this.authService.autoLoginAuth();
    this.socket.on("message", message => {
      console.log(message);
    });
  }
}
