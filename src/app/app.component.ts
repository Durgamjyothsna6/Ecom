import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
names:string="search";

n:string="submit";
  
  

  
  test(data:string):void
  {
    console.log(data);
  }

  title = 'home';
}
