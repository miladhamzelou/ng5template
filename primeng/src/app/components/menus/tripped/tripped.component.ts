import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/primeng";

@Component({
  selector: 'app-tripped',
  templateUrl: './tripped.component.html',
  styleUrls: ['./tripped.component.css']
})
export class TrippedComponent implements OnInit {

  constructor() { }
  
  items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'File',
                items: [{
                        label: 'New', 
                        icon: 'fa-plus',
                        items: [
                            {label: 'Project'},
                            {label: 'Other'},
                        ]
                    },
                    {label: 'Open'},
                    {label: 'Quit'}
                ]
            },
            {
                label: 'Edit',
                icon: 'fa-edit',
                items: [
                    {label: 'Undo', icon: 'fa-mail-forward'},
                    {label: 'Redo', icon: 'fa-mail-reply'}
                ]
            }
        ];
    }

}
