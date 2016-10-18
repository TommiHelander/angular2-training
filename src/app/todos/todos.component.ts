import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  items: any[] = [];

  addItem(name: string) {
    this.items.push({
      name: name,
      done: false
    });
  }

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.items = this.todoService.getItems();
  }

}
