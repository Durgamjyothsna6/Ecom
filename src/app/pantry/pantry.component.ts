import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.css']
})
export class PantryComponent implements OnInit {
  names:string="pantry";

  constructor() { }

  ngOnInit(): void {
  }

}
