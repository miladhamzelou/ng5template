import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  msg: String = '';

  constructor(
    private fb: FormBuilder, 
    private userService: UserService,
    private cookieService: CookieService,
    private router: Router,
    @Inject(DOCUMENT) private document: any
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'uname': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])]
    });
  }

  login() {
    this.msg = '';
    console.log('this.loginForm', this.loginForm)
    this.userService.login(this.loginForm.value).subscribe(res => {
      console.log('login', res);
      if (res['success']) {
        let user = { uname: this.loginForm.controls.uname.value };
        this.cookieService.set('testing',res['data'].token,60);
        // this.cookieService.set('testToken', res['data'].token,Date.now(),'','this.document.location.hostname',true);
        console.log("res['data.token']",res['data'].token, this.document.location);

        
        sessionStorage.setItem("test", JSON.stringify(user));
        console.log('testing', this.cookieService.get('testing'))
        this.reset();
        // this.router.navigate([{outlets: {popup: ['main']}}]);        
        this.router.navigate(['main']);
      }
      else this.msg = res['msg'];
    })

  }
  reset() {
    this.loginForm.reset();
    this.msg = '';
  }

}
