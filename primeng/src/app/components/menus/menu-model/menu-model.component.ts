import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-menu-model',
  templateUrl: './menu-model.component.html',
  styleUrls: ['./menu-model.component.css']
})
export class MenuModelComponent implements OnInit {

  constructor() { }

 private items: MenuItem[];

    ngOnInit() {
        this.items = [{
            label: 'File',
            items: [
                {label: 'New', icon: 'fa-plus'},
                {label: 'Open', icon: 'fa-download'}
            ]
        },
        {
            label: 'Edit',
            items: [
                {label: 'Undo', icon: 'fa-refresh'},
                {label: 'Redo', icon: 'fa-repeat'}
            ]
        }];
    }
}
