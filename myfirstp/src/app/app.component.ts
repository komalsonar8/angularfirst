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

}
