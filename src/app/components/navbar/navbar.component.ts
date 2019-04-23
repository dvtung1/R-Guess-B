import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean;
  isManage: boolean;
  private authListener: Subscription;

  ngOnDestroy(): void {
    this.authListener.unsubscribe();
  }
  constructor(private authService: AuthService, private router: Router) {
    this.isManage = false;
  }

  ngOnInit() {
    //this.isManage = this.router.url === "/manage" ? true : false;
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
