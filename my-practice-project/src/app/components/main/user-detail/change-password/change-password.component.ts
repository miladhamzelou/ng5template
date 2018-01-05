import { UserService } from '../../../../services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm: FormGroup;
  isPasswordMatch: Boolean = true;
  msg: String;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.changePasswordForm = new FormGroup({
      password: new FormControl('', Validators.compose([Validators.minLength(5), Validators.required])),
      newPassword: new FormControl('', Validators.compose([Validators.minLength(5), Validators.required])),
      repeatPassword: new FormControl('', Validators.compose([Validators.minLength(5), Validators.required]))
    });
  }

  changePassword() {
    this.userService.changePassword(this.changePasswordForm.value).subscribe(res => {
      if(res['success']){
        this.msg = 'Password Changed Successfully';
        this.reset();
      }else{
        this.msg = res['msg'];
      }
    });
  }

  checkPassword(){
    let newPass = this.changePasswordForm.controls.newPassword.value;
    let repPass = this.changePasswordForm.controls.repeatPassword.value;
    this.isPasswordMatch = true;
    if(newPass && repPass && newPass.length >= 5 && repPass.length >= 5 && newPass != repPass) {
        this.isPasswordMatch = false;
      }
  }
  
  reset() {
    this.changePasswordForm.reset();
    this.msg = '';
  }

}
