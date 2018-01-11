import { MenuItem } from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-context',
  templateUrl: './menu-context.component.html',
  styleUrls: ['./menu-context.component.css']
})
export class MenuContextComponent implements OnInit {

  constructor() { }

 private items: MenuItem[];

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
