import { UserService } from '../../services/user.service';
import { FormValidationsService } from '../../services/form-validations.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  msg: String;

  registerForm: FormGroup;

  constructor(private formValidations: FormValidationsService, private userService: UserService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'name':new FormGroup({
        'firstName': new FormControl('', Validators.compose([
          Validators.required, 
          this.formValidations.nameValidator
        ])),
        'middleName': new FormControl('', Validators.compose([this.formValidations.nameValidator])),
        'lastName': new FormControl('', Validators.compose([this.formValidations.nameValidator]))
      }),
      'uname':new FormControl('', Validators.compose([
        Validators.required, 
        this.formValidations.emailValidator
      ])),
      'password':new FormControl('', Validators.compose([Validators.required, 
        Validators.minLength(5)
      ]))
    })
  }

  register(){
    this.msg = '';
    this.userService.register(this.registerForm.value).subscribe(res => {
      console.log(res);
      if (res['success']) this.reset();
      else this.msg = res['msg'];
    });
  }

  reset(){
    this.registerForm.reset();
  }

}
