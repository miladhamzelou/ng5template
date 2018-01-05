import { AbstractControl, AbstractControlDirective, FormControl } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-errors',
  template: `
    <ul *ngIf="shouldShowErrors()">
      <li class="r-c" *ngFor="let error of listOfErrors()">{{error}}</li>
    </ul>
  `
})
export class FormErrorsComponent {

  private static readonly errorMessages = {
    'required': () => 'This field is required',
    'minlength': (params) => 'The min number of characters is ' + params.requiredLength,
    'maxlength': (params) => 'The max allowed number of characters is ' + params.requiredLength,
    'pattern': (params) => 'The required pattern is: ' + params.requiredPattern,
    'year': (params) => params.message,
    'email': (params) => params.message,
    'name': (params) => params.message,
    'error': (params) => params.message,
    'number': (params) => params.message
  };

  @Input()
  private control: AbstractControlDirective | AbstractControl;

  shouldShowErrors(): boolean {
    return this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched);
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field]));
  }


  private getMessage(type: string, params: any) {
    return FormErrorsComponent.errorMessages[type](params);
  }
  

}
