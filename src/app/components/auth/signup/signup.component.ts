import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit, OnDestroy {
  public errorMessage: string;
  private authMessageListener: Subscription;
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
    const rePassword = form.value.password2;
    //check if email is purdue email
    if (!email.includes("@purdue.edu")) {
      this.errorMessage = "Please use purdue email";
      // form.reset();
      return;
    }
    //check if password enter correctly
    if (!(password === rePassword)) {
      this.errorMessage = "Please reenter password";
      //      form.reset();
      return;
    }
    //sign up
    this.authService.signup(email, password);
  }
}
