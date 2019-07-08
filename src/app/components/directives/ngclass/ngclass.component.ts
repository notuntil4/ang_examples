import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: `./ngclass.components.html`,
  styleUrls: ['./ngclass.components.css']
})
export class NgclassComponent implements OnInit {

  isBlue= true;
  isGreen = false;
  isWhite = true;
  isBlack = false;

  constructor() {

  }

  ngOnInit() {
  }

}
