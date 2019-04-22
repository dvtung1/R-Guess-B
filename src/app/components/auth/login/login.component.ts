import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit, OnDestroy {
  private authMessageListener: Subscription;
  errorMessage: string;
  constructor(private authService: AuthService) {}
  ngOnDestroy(): void {
    this.authMessageListener.unsubscribe();
  }

  ngOnInit() {
    this.authMessageListener = this.authService
      .getAuthMessageEmitter()
      .subscribe(message => {
        this.errorMessage = message;
      });
  }
  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.login(email, password);
  }
}
