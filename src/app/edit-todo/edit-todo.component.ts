import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  index: number;
  item: any;
  name: string;
  assignee: string;

  constructor(private route: ActivatedRoute,
              private todoService: TodoService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.index = params.index;
      this.item = this.todoService.getItemByIndex(this.index);
      this.name = this.item.name;
      this.assignee = this.item.assignee;
    });
  }

  save() {
    this.item.name = this.name;
    this.item.assignee = this.assignee;
    this.router.navigateByUrl('/todos');
  }

}
