import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databindings',
  template: `
    <p>
      {{greeting}} works! {{1+1}}<br>
      <input type="text" value="defaultValue"/><br><br>

      <input type="submit" (click)="display();"/><br><br>

      <img [src]=imgURL alt="no image"/>
    </p>
  `,
  styles: ["p{color:green;} img{width:300px;}"]
})
export class DatabindingsComponent implements OnInit {

  greeting = "Hello user";
  defaultValue = "Name";
  imgURL;
  gucci = "https://res.cloudinary.com/teepublic/image/private/s--fxiVlH3n--/t_Preview/b_rgb:908d91,c_limit,f_jpg,h_630,q_90,w_630/v1511941430/production/designs/2116928_1.jpg";
  beauty = "http://i.imgur.com/JLk6yhx.png";
  hank = "https://pics.me.me/shut-the-hell-up-urameshi-fun-fact-yu-yu-hakusho-28082596.png";


  constructor() {
    this.imgURL ="";
   }

  ngOnInit() {
  }

  display() {
    if(this.imgURL == "" || this.imgURL == this.hank)
      this.imgURL = this.gucci;
    else if(this.imgURL == this.gucci)
      this.imgURL = this.beauty;
    else
      this.imgURL = this.hank;

      console.log(this.defaultValue);
    
  }

}
