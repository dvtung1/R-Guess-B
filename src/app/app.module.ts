import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { SignupComponent } from "./components/auth/signup/signup.component";
import { GameComponent } from "./components/game/game.component";

import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ManageComponent } from "./components/manage/manage.component";

import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";

const config: SocketIoConfig = { url: "http://localhost:3000", options: {} };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    GameComponent,
    NavbarComponent,
    ManageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
