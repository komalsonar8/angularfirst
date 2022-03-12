import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Komal first Project';
  video:string="Please subscribe ";
  like:string="please Share with your friends";

  fname:string="Komal";
  lname:string="Vispute";
  you():string{
    return this.fname+this.lname;
  }

/* checkproperty:string="Komal Vispute Property"; 

isHidden:boolean=false; */

texts:string="";
myfun(){
  console.log("Welcome ......");
  this.texts="welcome Technical channel";
}

}
