import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { APP_ROUTES } from "./app.routes";
import { BrowserModule } from "@angular/platform-browser";
import { HomeComponent } from "./home/home.component";
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
