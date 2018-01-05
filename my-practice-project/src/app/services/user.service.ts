import { appConst } from '../utils/constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  changePassword(data){
    if(data){
      data.uname = JSON.parse(sessionStorage.getItem('test'))['uname'];
      console.log('data',data)
      return this.http.put(appConst.LOGIN,data);
    }
  }

  login(data){
    return this.http.post(appConst.LOGIN,data);
  }

  register(data){
    return this.http.post(appConst.USER,data);
  }

  getUser(data){
    console.log(data)
    return this.http.get(appConst.USER, {params:{"uname":data}});
  }

}
