import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean;
  private authListener: Subscription;

  ngOnDestroy(): void {
    this.authListener.unsubscribe();
  }
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isAuthenticated = this.authService.getIsAuthenticated();
    this.authListener = this.authService
      .getAuthEmitter()
      .subscribe(isAuthenticated => {
        this.isAuthenticated = isAuthenticated;
      });
  }

  logout() {
    this.authService.logout();
  }
}
