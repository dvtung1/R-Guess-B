import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Subject } from "rxjs";
import { Router } from "@angular/router";
import { TouchSequence } from "selenium-webdriver";

const BACKEND_URL = environment.apiUrl + "/user";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private token: string;
  private isAuthenticated: boolean;
  private userId: string;
  private authEmitter = new Subject<boolean>();
  private authMessageEmitter = new Subject<string>();
  private timerInterval: any;
  private userEmail: string;
  constructor(private http: HttpClient, private router: Router) {}
  signup(email: string, password: string) {
    this.http
      .post<{ message: string }>(BACKEND_URL + "/signup", {
        email,
        password
      })
      .subscribe(
        () => {
          this.router.navigate(["/login"]);
        },
        err => {
          this.authMessageEmitter.next(err.error.message);
        }
      );
  }
  login(email: string, password: string) {
    this.http.post<any>(BACKEND_URL + "/login", { email, password }).subscribe(
      response => {
        this.userEmail = email;
        this.token = response.token;
        if (this.token) {
          const expirationTime = response.expiresIn;
          //automatically log out after a period of time
          this.setAuthTimer(expirationTime);
          this.isAuthenticated = true;
          this.userId = response.userId;
          this.authEmitter.next(true);
          const timeNow = new Date();
          const absoluteExpirationDate = new Date(
            timeNow.getTime() + expirationTime * 1000
          );
          console.log(absoluteExpirationDate);
          //save auth info so user do not need to log in every time
          this.saveAuthInfo(
            this.userId,
            absoluteExpirationDate.toISOString(),
            this.token,
            this.userEmail
          );
        }
        this.router.navigate(["/"]);
      },
      err => {
        this.authMessageEmitter.next(err.error.message);
        this.authEmitter.next(false);
      }
    );
  }
  autoLoginAuth() {
    //auto log user in until time expired
    const authInfo = this.getAuthInfo();
    if (!authInfo) {
      return;
    }
    const expirationDate = new Date(authInfo.expirationDate);
    const timeNow = new Date();
    const expiresIn = expirationDate.getTime() - timeNow.getTime();
    if (expiresIn > 0) {
      this.token = authInfo.token;
      this.userId = authInfo.userId;
      this.userEmail = authInfo.email;
      this.isAuthenticated = true;
      this.authEmitter.next(true);
      this.setAuthTimer(expiresIn / 1000);
    }
  }

  logout() {
    this.token = null;
    this.userId = null;
    this.isAuthenticated = false;
    this.authEmitter.next(false);
    this.clearAuthInfo();
    clearInterval(this.timerInterval);
    this.http.get<{ message: string }>(BACKEND_URL + "/logout").subscribe(
      response => {
        console.log(response.message);
      },
      err => {
        console.log(err.error.message);
      }
    );
    //this.router.navigate(["/"]);
  }

  private setAuthTimer(duration: number) {
    //auto log out for a duration
    this.timerInterval = setInterval(() => {
      this.logout();
      alert("You have been logged out");
    }, duration * 1000);
  }

  private clearAuthInfo() {
    localStorage.removeItem("userId");
    localStorage.removeItem("expirationDate");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  }
  private saveAuthInfo(
    userId: string,
    expirationDate: string,
    token: string,
    email: string
  ) {
    //save authentication info to locl storage
    localStorage.setItem("userId", userId);
    localStorage.setItem("expirationDate", expirationDate);
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
  }
  private getAuthInfo() {
    //get authentication info from local storage
    const userId = localStorage.getItem("userId");
    const expirationDate = localStorage.getItem("expirationDate");
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    if (!token || !expirationDate) {
      return;
    }
    return {
      userId,
      expirationDate,
      token,
      email
    };
  }
  getToken() {
    return this.token;
  }
  getAuthEmitter() {
    return this.authEmitter.asObservable();
  }
  getIsAuthenticated() {
    return this.isAuthenticated;
  }
  getAuthMessageEmitter() {
    return this.authMessageEmitter.asObservable();
  }
  getUserEmail() {
    return this.userEmail;
  }
}
