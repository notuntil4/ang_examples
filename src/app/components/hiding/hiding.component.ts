import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hiding',
  template: `
    <p>Hello</p>
    <input type="text" [(ngModel)]="ans"/><br>
    <input type="submit" (click)="method()" /><br>
    <div [hidden]="divStatus">
      <img [src]="imgURL" alt="no image">
    </div>
  `,
  styles: ["img{width:300px;}"]
})
export class HidingComponent implements OnInit {

  divStatus:boolean = true;
  ans:string = "";
  imgURL = "https://images7.memedroid.com/images/UPLOADED176/56fbeba62fd8a.jpeg";

  constructor() {  }

  ngOnInit() {
  }

  method() {
    if(this.ans == "yusuke's friends")
      this.divStatus = false;
    else
      this.divStatus = true;
  }

}
