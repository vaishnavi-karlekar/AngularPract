import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-railway',
  templateUrl: './railway.component.html',
  styleUrls: ['./railway.component.css']
})
export class RailwayComponent implements OnInit {

  constructor() { 
    console.log("THis is constructor");
  }

  ngOnInit(): void {
    console.log("this component works fine");
  }

}
