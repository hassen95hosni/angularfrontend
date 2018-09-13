import {Component, OnInit} from '@angular/core';
//import {AngularRethinkDBService, AngularRethinkDBObservable, IRethinkDBQuery} from './ng-rethinkdb';
/*
import { WeatherService } from './weather.service';
*/

import { Chart } from 'chart.js';
/*import * as $ from 'jquery';
import * as CanvasJS from './canvasjs.min';*/
@Component({
 /* selector: 'line-chart-demo',
  templateUrl: './line-chart-demo.html'*/
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*export class LineChartDemoComponent {
  // lineChart
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}*/

export class AppComponent {
 /* r = require('rethinkdb')
  var connection = null
  r.connect( {host: 'localhost' , port: 28015 }, function(err, conn) {
  if(err) throw err;
  connection=conn;
  })
  r.table('authors').run(connection, function(err, cursor) {
    if (err) throw err;

    cursor.toArray(function(err, result) {
      if (err) throw err;
      console.log(result)
      console.log(JSON.stringify(result, null, 2));
    });
  });
*/
 /* LineChart = [];*/
/*
  ngOnInit() {
    this.LineChart = new Chart
    (
          'lineChart',
          {
              type: 'line' ,
              data:
                  {
                  labels:['1', '2' , '3' ],
                  datasets :
                        [
                            {
                                label: 'number of blah',
                                data:[9,7,3],
                                fill: false ,
                                lineTension:0.5,
                                borderColor: 'red' ,
                              borderWidth: 1
                            }
                        ]
                  }
              ,options :
                      {title :
                            { text:"Line chart"
                              ,display: true
                            },
                      scales: {
                              yAxes :
                                    [
                                        {
                                          ticks:
                                              { beginAtZero: true
                                              }
                                        }
                                    ]
                              }
                      }
          }
    );
}*/
}





/*export class AppComponent implements  OnInit {
  chart = [];
  title = 'untitled1';
  constructor(private _weather: WeatherService) {}
  ngOnInit() {
    this._weather.dailyForecast()
      .subscribe(res => {
        let temp_max = res['list'].map(res => res.main.temp_max);
        let temp_min = res['list'].map(res => res.main.temp_min);
        let alldates = res['list'].map(res => res.dt)

        let weatherDates = []
        alldates.forEach((res) => {
          let jsdate = new Date(res * 1000)
          weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
        })
        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: weatherDates,
            datasets: [
              {
                data: temp_max,
                borderColor: '#3cba9f',
                fill: false
              },
              {
                data: temp_min,
                borderColor: '#ffcc00',
                fill: false
              },
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }],
            }
          }
        });
      });
  }
   }*/


/*export class AppComponent implements OnInit {
  ngOnInit() {
    let dataPoints = [];
    let dpsLength = 0;
    let chart = new CanvasJS.Chart("chartContainer",{
      exportEnabled: true,
      title:{
        text:"Live Chart with Data-Points from External JSON"
      },
      data: [{
        type: "spline",
        dataPoints : dataPoints,
      }]
    });

    $.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=25&length=20&type=json&callback=?", function(data) {
      $.each(data, function(key, value){
        dataPoints.push({x: value[0], y: parseInt(value[1])});
      });
      dpsLength = dataPoints.length;
      chart.render();
      updateChart();
    });
    function updateChart() {
      $.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=" + (dpsLength + 1) + "&ystart=" + (dataPoints[dataPoints.length - 1].y) + "&length=1&type=json&callback=?", function(data) {
        $.each(data, function(key, value) {
          dataPoints.push({
            x: parseInt(value[0]),
            y: parseInt(value[1])
          });
          dpsLength++;
        });

        if (dataPoints.length >  20 ) {
          dataPoints.shift();
        }
        chart.render();
        setTimeout(function(){updateChart()}, 1000);
      });
    }
  }}*/
/*angular.module('myModule', ['chart.js']);*/

