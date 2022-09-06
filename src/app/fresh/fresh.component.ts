import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fresh',
  templateUrl: './fresh.component.html',
  styleUrls: ['./fresh.component.css']
})
export class FreshComponent implements OnInit {

  names:string="fresh";
  

  constructor() { }

  ngOnInit(): void {
  }

}
