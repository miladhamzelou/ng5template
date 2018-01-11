import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/primeng";

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

    ngOnInit() {
        this.items = [
            {label: 'Step 1'},
            {label: 'Step 2'},
            {label: 'Step 3'}
        ];
    }

}
