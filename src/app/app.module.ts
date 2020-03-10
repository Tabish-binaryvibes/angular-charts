import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PieComponent } from "./pie/pie.component";
import { LineComponent } from "./line/line.component";
import { ChartModule } from "angular-highcharts";

@NgModule({
  declarations: [AppComponent, PieComponent, LineComponent],
  imports: [BrowserModule, AppRoutingModule, ChartModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
