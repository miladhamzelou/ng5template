import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-set',
  templateUrl: './field-set.component.html',
  styleUrls: ['./field-set.component.css']
})
export class FieldSetComponent implements OnInit {

  header: String = 'Dynamic Content';
  
  constructor() { }

  ngOnInit() {
  }

}
