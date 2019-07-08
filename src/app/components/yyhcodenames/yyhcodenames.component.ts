import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yyhcodenames',
  template: `
    <br>
    <img [src]="kuwabara" alt="no image" ><br>
    <p>Codenames for everyone</p>
    <input type="text" [(ngModel)]="codename"/><br>
    <input type="submit" (click)="method()" /><br>
    <div>
      <img [src]="codenameImg" alt="no image" ><br>
      <img [src]="codenameImg2" alt="no image" >
    </div>

    <p>Wanna see something pure?</p>
    <input type="submit" value="yes!" (click)="method2()" />&nbsp;&nbsp;&nbsp;
    <input type="submit" value="no!" (click)="method3()" /><br>
    <img [src]="pureImg" alt="no image" >
  `,
  styles: ["img{width:300px;}"]
})
export class YyhcodenamesComponent implements OnInit {

  kuwabara="https://66.media.tumblr.com/6da791b526d0b5caf68e77147a217dd5/tumblr_o0070knIiW1uf6aslo1_540.jpg";
  botan="https://66.media.tumblr.com/ebdb2537921563534a3c08998ce44e2c/tumblr_o0070knIiW1uf6aslo4_540.jpg";
  yukina="https://66.media.tumblr.com/8d120a1a2aba9316044f07647a2836cd/tumblr_o0070knIiW1uf6aslo5_540.jpg";
  yusuke="https://66.media.tumblr.com/0359ff439e277a0e6d739aa04f64f649/tumblr_o0070knIiW1uf6aslo6_540.jpg";
  kurama="https://66.media.tumblr.com/d145ff872ae279c503814bcca510ba62/tumblr_o0070knIiW1uf6aslo7_540.jpg";
  hei1="https://66.media.tumblr.com/a9f857ccddc2382f8f8d3a99e820cebb/tumblr_o0070knIiW1uf6aslo3_540.jpg";
  hei2="https://66.media.tumblr.com/673526378d204b713c2d5b3f72987c30/tumblr_o0070knIiW1uf6aslo2_540.jpg";
  codename="";
  codenameImg="";
  codenameImg2="";

  pureImg="";

  constructor() { }

  ngOnInit() {
  }

  method() {
    if(this.codename == "botan")
      this.codenameImg = this.botan;
    else if(this.codename == "yukina")
      this.codenameImg = this.yukina;
    else if(this.codename == "yusuke")
      this.codenameImg = this.yusuke;
    else if(this.codename == "kurama")
      this.codenameImg = this.kurama;
    else if (this.codename == "hei") {
      this.codenameImg = this.hei1;
      this.codenameImg2 = this.hei2;
    }
    else {
      this.codenameImg = "";
      this.codenameImg2 = "";
    }
  }

  method2() {
      this.pureImg="https://www.fanbyte.com/wp-content/uploads/2019/02/image1-3.jpg";
  }

  method3() {
    this.pureImg = "https://a.wattpad.com/cover/180386729-352-k220632.jpg";
  }

}
