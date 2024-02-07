import { NgModule } from "@angular/core";
import { CARS_ROUTES } from "./carCreate.routes";
import { RouterModule } from "@angular/router";
import { CarCreateComponent } from "./car-create/car-create.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { CarCreateService } from "./carCreate.service";

@NgModule({
  imports: [
    RouterModule.forChild(CARS_ROUTES),
    BrowserModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    TextFieldModule,
    MatSelectModule,
    MatCardModule,
  ],
  providers: [CarCreateService],
  declarations: [
    CarCreateComponent
  ]
})
export class CarCreateModule { }
