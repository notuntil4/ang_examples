import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-loggingcomponent',
  template: `
    <p>
      loggingcomponent works!
    </p>

    <button (click)="method('button 1 clicked')">Button 1</button>

    <div *ngIf="logs">
      {{logs[0].message}}
    </div>

  `,
  styles: [],
  providers: [LoggingService]
})
export class LoggingcomponentComponent implements OnInit {

  logs:any[];
  log:any;

  constructor(private logService:LoggingService) { }

  ngOnInit() {
  }

  method(msg) {
    this.logService.log(msg);
    this.logs = this.logService.getLog();
    this.log = this.logs[0];
  }

}
