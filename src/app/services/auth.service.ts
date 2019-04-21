import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

const BACKEND_URL = environment.apiUrl + "/user";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private token: string;
  constructor(private http: HttpClient) {}
  signUp(email: string, password: string) {
    return this.http.post<{ message: string }>(BACKEND_URL + "/signup", {
      email,
      password
    });
  }
  login(email: string, password: string) {
    this.http
      .post<any>(BACKEND_URL + "/login", { email, password })
      .subscribe(response => {
        this.token = response.token;
        if (this.token) {
          const expirationTime = response.expiresIn;
        }
      });
  }
  getToken() {
    return this.token;
  }
}
