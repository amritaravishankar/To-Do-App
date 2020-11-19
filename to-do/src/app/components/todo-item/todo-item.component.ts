import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  // Set Dynamic Classes
  setClasses()
  {
    let classes = {
      todo: true,
      'is-completed': this.todo.completed, // true or false
    }
    return classes;
  }

  onToggle(todo)
  {
    // Toggle in UI
    todo.completed=!todo.completed;

    // Toggle in Server
    this.todoService.toggleCompleted(todo).subscribe(todo => 
      console.log(todo)
      );
  }

  onDelete(todo)
  {
    console.log("On delete")
  }

}
