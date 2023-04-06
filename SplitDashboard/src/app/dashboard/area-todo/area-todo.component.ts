import { Component, OnInit } from '@angular/core';

interface TodoItem {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-area-todo',
  templateUrl: './area-todo.component.html',
  styleUrls: ['./area-todo.component.scss']
})
export class AreaTodoComponent implements OnInit {

  todoItems: TodoItem[] = [
    {text: 'add further todos', completed: false}
  ];

  newItem: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addItem() {
    if (this.newItem !== '') {
      this.todoItems.push({text: this.newItem, completed: false});
      this.newItem = '';
    }
  }

  removeItem(item: TodoItem) {
    const index = this.todoItems.indexOf(item);
    if (index >= 0) {
      this.todoItems.splice(index, 1);
    }
  }

}
