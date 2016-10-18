import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  private items: any[] = [
    {
      name: "Do the laundry",
      assignee: "Batman",
      done: true
    },
    {
      name: "Wash the dishes",
      assignee: "Spiderman",
      done: false
    },
    {
      name: "Walk the dog",
      assignee: "He-man",
      done: false
    }
  ];

  getItems() {
    return this.items;
  }

  getItemByIndex(index: number) {
    return this.items[index];
  }

  constructor() { }

}
