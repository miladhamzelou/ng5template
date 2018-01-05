import { Todo } from '../../interfaces/todo';
import { Component, OnInit } from '@angular/core';
import { HomeService } from './../../services/home.service';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // = undefined;
   todos: Todo[] = [];
  search: string;
  myform:FormGroup;

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {

      this.getTodos();
    this.myform = new FormGroup({
        desc:  new FormControl('', Validators.required),
        date: new FormControl()
    });
  }

  pres(val){
    this.search=val;
  }

  addTodo(){
    console.log(this.myform);
    if(this.myform.valid){
           
      this.homeService.addTodo(this.myform.value).subscribe(res => {
        console.log('res',res)
        this.getTodos();
        }, (err) => {
          console.log(err);
        }
      );

      this.myform.reset();

    }
  }

  getTodos(){
       this.homeService.getAllTodos().subscribe(response => {
          console.log('get res',response['data'],response)
          if(response['success']){
            this.todos = response['data'];
          }else{
            this.todos = []
          }
      });
  }

  removeTodo(index){
    console.log(this.todos[index],index);
    // this.todos.splice(index, 1);
    this.homeService.removeTodo(this.todos[index]._id).subscribe(res => {
      console.log('del res',res)
        this.getTodos();
    });
  }

}
