import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngpipe',
  template: `
    <p>
      ngpipe works! {{ name | uppercase | lowercase | titlecase }} <br>
      DOB: {{dates | date: 'short'}} <br>
      Money: {{money1 | currency: 'USD ':false }} <br>
      Money: {{money2 | currency: 'USD':true: '1.2-2' }} <br>
      Exponential: {{num | exponentialStrength: 5}}
    </p>
  `,
  styles: []
})
export class NgpipeComponent implements OnInit {

  name:string="orie";
  dates:Date= new Date("06/28/2019");
  money1:number = 2130.259;
  money2:number = 17.3495;

  num:number = 5;

  constructor() { }

  ngOnInit() {
  }

}
