import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voteparent',
  templateUrl: './voteparent.component.html',
  styleUrls: ['./voteparent.component.css']
})
export class VoteparentComponent implements OnInit {

  votedBy = ['Adam','David','Yousef'];
  isYes:number=0;
  isNo:number=0;

  constructor() { }

  ngOnInit() {
  }

  methodParent(val:boolean) {
    val? this.isYes++ : this.isNo++;
  }

}
