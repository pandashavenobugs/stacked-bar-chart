import { Component } from '@angular/core';
import * as Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsExporting from "highcharts/modules/exporting";
import xrange from "highcharts/modules/xrange";
HighchartsMore(Highcharts);
HighchartsExporting(Highcharts);
xrange(Highcharts);

//https://stackoverflow.com/questions/51512211/implementing-highcharts-xrange-in-angular4



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stacked-bar-chart';
  updateFlag = false;
  Highcharts= Highcharts;
  chartOptions ={
    chart:{
      type:'xrange'
    },
    xAxis:{
      type:'datetime'
    },
    yAxis: {
      title: '',
      categories: ['Prototyping', 'Development', 'Testing'],
      min: 0,
      max: 2
    },
    series: [{
      name: 'Project 1',
      // pointPadding: 0,
      // groupPadding: 0,
      borderRadius: 5,
      pointWidth: 10,
      data: [{
          x: Date.UTC(2014, 11, 1),
          x2: Date.UTC(2014, 11, 2),
          color: "red",
          y: 0
      }, {
          x: Date.UTC(2014, 11, 2),
          x2: Date.UTC(2014, 11, 5),
          y: 1
      }, {
          x: Date.UTC(2014, 11, 8),
          x2: Date.UTC(2014, 11, 9),
          color: "red",
          y: 2
      }, {
          x: Date.UTC(2014, 11, 9),
          x2: Date.UTC(2014, 11, 19),
          color: "yellow",
          y: 1
      }, {
          x: Date.UTC(2014, 11, 10),
          x2: Date.UTC(2014, 11, 23),
          y: 2
      }]
  }]
  }

}
