import { PieComponent } from "./pie/pie.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LineComponent } from "./line/line.component";

const routes: Routes = [
  {
    path: "pie",
    component: PieComponent
  },
  {
    path: "line",
    component: LineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
