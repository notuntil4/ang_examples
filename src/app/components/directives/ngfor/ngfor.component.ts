import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  template: `
    <ul>
      <li *ngFor="let todo of todos; index as i; even as isFirst">
          <p [ngStyle]="{ 'background-color': todo.status == true ? 'green' : 'red'}">
            {{todo.status + " - " + i + " - " + todo.desc}}
          </p>
      </li>
    </ul>

    <div *ngFor="let todo of todos; index as i; first as isFirst">
      {{isFirst + " - " + i + " - " + todo.desc}}
    </div>

  <table>
    <thead>

    </thead>
    <tbody>
      <tr *ngFor="let todo of todos; index as i; first as isFirst">
        <td>{{todo.id}}</td>
        <td>{{todo.username}}</td>
        <td>{{todo.desc}}</td>
        <td><button type="submit"><a href="{{todo.deleteLink}}">delete</a></button></td>
      </tr>
    </tbody>


  </table>

  `,
  styles: ["a {color: black; text-decoration: none;}"]
})
export class NgforComponent implements OnInit {

  todos = [
    {
      id:1,
      username:"root",
      desc:"shopping",
      status:true,
      targetDate:new Date("28/06/2019")
    },
    {
      id:2,
      username:"root",
      desc:"shopping1",
      status:true,
      targetDate:new Date("28/06/2019")
    },
    {
      id:3,
      username:"root",
      desc:"shopping2",
      status:false,
      targetDate:new Date("28/06/2019")
    },
    {
      id:4,
      username:"root",
      desc:"shopping3",
      status:true,
      targetDate:new Date("28/06/2019")
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
