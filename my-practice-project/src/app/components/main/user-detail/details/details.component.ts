import { UserService } from '../../../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  user: any;
  msg: String;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser()
  }

  getUser(){
    console.log('sessionStorage.getItem(JSON.parse("test"))',JSON.parse(sessionStorage.getItem("test")))
    this.userService.getUser(JSON.parse(sessionStorage.getItem("test"))['uname']).subscribe(res =>{
      console.log(res)
      if(res['success'])
        this.user = res['data'];
      else this.msg = res['msg'];
    })
  }
}
