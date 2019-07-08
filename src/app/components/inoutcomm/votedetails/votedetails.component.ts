import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-votedetails',
  templateUrl: './votedetails.component.html',
  styleUrls: ['./votedetails.component.css']
})
export class VotedetailsComponent implements OnInit {

  // variable to be set for child from parent
  @Input() voters:string;

  @Output() voted = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit() {
  }

  // prepare your child to send information to parent
  methodVote(val:boolean) {
    // parent
    this.voted.emit(val);
  }

}
