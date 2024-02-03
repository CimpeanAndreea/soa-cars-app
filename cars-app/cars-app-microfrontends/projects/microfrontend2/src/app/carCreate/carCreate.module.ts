import { NgModule } from "@angular/core";
import { CARS_ROUTES } from "./carCreate.routes";
import { RouterModule } from "@angular/router";
import { CarCreateComponent } from "./car-create/car-create.component";

@NgModule({
  imports: [
    RouterModule.forChild(CARS_ROUTES),
  ],
  declarations: [
    CarCreateComponent
  ]
})
export class CarCreateModule { }
