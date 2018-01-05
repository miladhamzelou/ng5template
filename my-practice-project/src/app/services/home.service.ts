import { appConst } from '../utils/constants';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {
  
  constructor(private http: HttpClient){}
  
  addTodo(todo){
    return this.http.post(appConst.TODO,todo);
  }

  getAllTodos() {
    return this.http.get(appConst.TODO);
  }

  removeTodo(id){
    return this.http.delete(appConst.TODO,{params:{"_id":id}});
  }

}
