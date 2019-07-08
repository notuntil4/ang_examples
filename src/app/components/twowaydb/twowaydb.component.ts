import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaydb',
  template: `
    <input type="text" [(ngModel)]="name"/><br>
    {{name}}
  `,
  styles: []
})
export class TwowaydbComponent implements OnInit {

  pi:number=3.14;
  name:string;

  constructor() {
    // read data from service / rest servieces
    this.name = "orie";
   }

  ngOnInit() {
  }

}
