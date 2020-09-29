import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

import {Loandata, Dataset} from '@app/_models';
import { AuthenticationService } from '@app/_services';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-loaddashboard',
  templateUrl: './loaddashboard.component.html',
  styleUrls: ['./loaddashboard.component.less']
})
export class LoaddashboardComponent implements OnInit {

  data: Loandata[];

  year = [];
  price = [];
  chart = [];

  constructor(private accountService: AuthenticationService) {
  }

  ngOnInit() {
    this.accountService.loandata()
      .pipe(first())
      .subscribe((Loandata) => {
        Loandata['dataset']['data'].forEach(y => {
            this.year.push(y[0]);
            this.price.push(y[1]);
          }
        );
        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: this.year,
            datasets: [
              {
                data: this.price,
                borderColor: '#3cba9f',
                fill: false
              }
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

}
