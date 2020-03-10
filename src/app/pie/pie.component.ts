import { Component, OnInit } from "@angular/core";
import { Chart } from "angular-highcharts";

@Component({
  selector: "app-pie",
  templateUrl: "./pie.component.html",
  styleUrls: ["./pie.component.scss"]
})
export class PieComponent implements OnInit {
  public chart;
  constructor() {
    this.chart = new Chart(this.options);
  }

  options: any = {
    time: {
      timezone: "Asia/Karachi",
      useUTC: false
    },
    chart: {
      type: "pie",
      options3d: {
        enabled: true,
        alpha: 45
      }
    },
    title: {
      text: `Activity Trend`
    },
    subtitle: {
      text: "Dummy"
    },
    xAxis: {
      type: "datetime",
      title: {
        text: "Date"
      }
    },
    yAxis: {
      title: {
        text: null
      },
      min: 0
    },
    legend: {
      align: "center",
      verticalAlign: "top",
      borderWidth: 0,
      bubbleLegend: {
        enabled: true
      }
    },
    tooltip: {
      pointFormat:
        "<b>{point.name}</b>:<br>{point.percentage:.1f} %<br>Total: {point.y}"
    },
    plotOptions: {
      pie: {
        borderWidth: 5,
        borderColor: "white",
        innerSize: 130,
        depth: 45,
        colors: ["red", "orange"],
        dataLabels: {
          enabled: false
        },
        showInLegend: true,
        point: {
          events: {
            click: function(event: any) {
              console.log(event);
            }
          }
        }
      }
    },
    series: [
      {
        colorByPoint: true,
        data: [
          { name: "one", y: 50, color: "#eb4034" },
          { name: "two", y: 55, color: "#eb6b34" },
          { name: "three", y: 54, color: "#3d2605" },
          { name: "four", y: 20, color: "#121405" }
        ]
      }
    ]
  };
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }
  ngOnInit() {}
}
