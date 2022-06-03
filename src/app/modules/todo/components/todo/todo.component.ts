import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  // faTrashAlt = faTrashAlt;
  todos: any;
  
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getAllTodos()
  }

  getAllTodos() {
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data as Todo[];
      
    })
  }


}
