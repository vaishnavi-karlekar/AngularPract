import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  todos!:Todo[]; //structural directives 1. *ngFor , 2. *ngIf 3. *ngSwitch
  constructor() { 
    this.todos = [
      {
        sno: 1,
        title: "todo List",
        desc: "This is todo list",
        active: false
      },
      {
        sno: 2,
        title: "todo List2",
        desc: "This is todo list",
        active: true
      },
      {
        sno: 3,
        title: "todo List3",
        desc: "This is todo list",
        active: true
      },
      {
        sno: 4,
        title: "todo List4",
        desc: "This is todo list",
        active: false
      }
    ]
  }

  ngOnInit(): void {
  }

}
